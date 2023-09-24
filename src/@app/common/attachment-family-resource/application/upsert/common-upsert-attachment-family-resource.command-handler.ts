/* eslint-disable key-spacing */
import { CommonUpsertAttachmentFamilyResourceCommand } from '@app/common/attachment-family-resource';
import { CommonUpsertAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/upsert/common-upsert-attachment-family-resource.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonUpsertAttachmentFamilyResourceCommand)
export class CommonUpsertAttachmentFamilyResourceCommandHandler implements ICommandHandler<CommonUpsertAttachmentFamilyResourceCommand>
{
    constructor(
        private readonly upsertAttachmentFamilyResourceService: CommonUpsertAttachmentFamilyResourceService,
    ) {}

    async execute(command: CommonUpsertAttachmentFamilyResourceCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertAttachmentFamilyResourceService.main(
            {
                attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(command.payload.attachmentFamilyId),
                resourceId: new CommonAttachmentFamilyResourceResourceId(command.payload.resourceId),
            },
            command.cQMetadata,
        );
    }
}
