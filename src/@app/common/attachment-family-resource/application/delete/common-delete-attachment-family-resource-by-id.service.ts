import { CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { CommonAttachmentFamilyResourceAttachmentFamilyId, CommonAttachmentFamilyResourceResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonDeleteAttachmentFamilyResourceByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonIAttachmentFamilyResourceRepository,
    ) {}

    async main(
        attachmentFamilyId: CommonAttachmentFamilyResourceAttachmentFamilyId,
        resourceId: CommonAttachmentFamilyResourceResourceId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const attachmentFamilyResource = await this.repository
            .findById(
                undefined,
                {
                    constraint,
                    cQMetadata,
                    findArguments: {
                        attachmentFamilyId: attachmentFamilyId.value,
                        resourceId: resourceId.value,
                    },
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                undefined,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                    findArguments: {
                        attachmentFamilyId: attachmentFamilyResource.attachmentFamilyId.value,
                        resourceId: attachmentFamilyResource.resourceId.value,
                    },
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const attachmentFamilyResourceRegister = this.publisher.mergeObjectContext(attachmentFamilyResource);

        attachmentFamilyResourceRegister.deleted(attachmentFamilyResource); // apply event to model events
        attachmentFamilyResourceRegister.commit(); // commit all events of model
    }
}
