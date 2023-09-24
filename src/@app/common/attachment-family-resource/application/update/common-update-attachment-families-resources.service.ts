import { CommonAddAttachmentFamiliesResourcesContextEvent, CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonUpdateAttachmentFamiliesResourcesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        payload: {
            attachmentFamilyId?: CommonAttachmentFamilyResourceAttachmentFamilyId;
            resourceId?: CommonAttachmentFamilyResourceResourceId;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const attachmentFamilyResource = CommonAttachmentFamilyResource.register(
            payload.attachmentFamilyId,
            payload.resourceId,
        );

        // update
        await this.repository.update(
            attachmentFamilyResource,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const attachmentFamiliesResources = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const attachmentFamiliesResourcesRegister = this.publisher.mergeObjectContext(
            new CommonAddAttachmentFamiliesResourcesContextEvent(attachmentFamiliesResources),
        );

        attachmentFamiliesResourcesRegister.updated(); // apply event to model events
        attachmentFamiliesResourcesRegister.commit(); // commit all events of model
    }
}
