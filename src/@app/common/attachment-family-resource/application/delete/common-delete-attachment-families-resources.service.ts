import { CommonAddAttachmentFamiliesResourcesContextEvent, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonDeleteAttachmentFamiliesResourcesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const attachmentFamiliesResources = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (attachmentFamiliesResources.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddAttachmentFamiliesResourcesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const attachmentFamiliesResourcesRegistered = this.publisher.mergeObjectContext(
            new CommonAddAttachmentFamiliesResourcesContextEvent(attachmentFamiliesResources),
        );

        attachmentFamiliesResourcesRegistered.deleted(); // apply event to model events
        attachmentFamiliesResourcesRegistered.commit(); // commit all events of model
    }
}
