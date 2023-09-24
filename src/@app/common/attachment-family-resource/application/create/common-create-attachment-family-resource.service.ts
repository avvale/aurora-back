import { CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonCreateAttachmentFamilyResourceService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        payload: {
            attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId;
            resourceId: CommonAttachmentFamilyResourceResourceId;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const attachmentFamilyResource = CommonAttachmentFamilyResource.register(
            payload.attachmentFamilyId,
            payload.resourceId,
        );

        await this.repository.create(
            attachmentFamilyResource,
            {
                createOptions: cQMetadata?.repositoryOptions,
                finderQueryStatement: (aggregate: CommonAttachmentFamilyResource) => ({
                    where: {
                        attachmentFamilyId: aggregate['attachmentFamilyId']['value'],
                        resourceId: aggregate['resourceId']['value'],
                    },
                }),
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const attachmentFamilyResourceRegister = this.publisher.mergeObjectContext(
            attachmentFamilyResource,
        );

        attachmentFamilyResourceRegister.created(attachmentFamilyResource); // apply event to model events
        attachmentFamilyResourceRegister.commit(); // commit all events of model
    }
}
