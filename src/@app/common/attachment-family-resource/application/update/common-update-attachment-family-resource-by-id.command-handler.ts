/* eslint-disable key-spacing */
import { CommonUpdateAttachmentFamilyResourceByIdCommand } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-family-resource-by-id.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonUpdateAttachmentFamilyResourceByIdCommand)
export class CommonUpdateAttachmentFamilyResourceByIdCommandHandler implements ICommandHandler<CommonUpdateAttachmentFamilyResourceByIdCommand>
{
    constructor(
        private readonly updateAttachmentFamilyResourceByIdService: CommonUpdateAttachmentFamilyResourceByIdService,
    ) {}

    async execute(command: CommonUpdateAttachmentFamilyResourceByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateAttachmentFamilyResourceByIdService.main(
            {
                attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(command.payload.attachmentFamilyId),
                resourceId: new CommonAttachmentFamilyResourceResourceId(command.payload.resourceId),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
