import { CommonAddAttachmentFamiliesResourcesContextEvent, CommonAttachmentFamilyResource, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonCreateAttachmentFamiliesResourcesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        payload: {
            attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId;
            resourceId: CommonAttachmentFamilyResourceResourceId;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateAttachmentFamiliesResources = payload.map(attachmentFamilyResource => CommonAttachmentFamilyResource.register(
            attachmentFamilyResource.attachmentFamilyId,
            attachmentFamilyResource.resourceId,
        ));

        // insert
        await this.repository.insert(
            aggregateAttachmentFamiliesResources,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddAttachmentFamiliesResourcesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const attachmentFamiliesResourcesRegistered = this.publisher.mergeObjectContext(new CommonAddAttachmentFamiliesResourcesContextEvent(aggregateAttachmentFamiliesResources));

        attachmentFamiliesResourcesRegistered.created(); // apply event to model events
        attachmentFamiliesResourcesRegistered.commit(); // commit all events of model
    }
}
