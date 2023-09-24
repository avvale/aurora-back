import { CommonDeleteAttachmentFamilyResourceByIdCommand } from '@app/common/attachment-family-resource';
import { CommonDeleteAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-family-resource-by-id.service';
import { CommonAttachmentFamilyResourceAttachmentFamilyId, CommonAttachmentFamilyResourceResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonDeleteAttachmentFamilyResourceByIdCommand)
export class CommonDeleteAttachmentFamilyResourceByIdCommandHandler implements ICommandHandler<CommonDeleteAttachmentFamilyResourceByIdCommand>
{
    constructor(
        private readonly deleteAttachmentFamilyResourceByIdService: CommonDeleteAttachmentFamilyResourceByIdService,
    ) {}

    async execute(command: CommonDeleteAttachmentFamilyResourceByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteAttachmentFamilyResourceByIdService.main(
            new CommonAttachmentFamilyResourceAttachmentFamilyId(command.attachmentFamilyId),
            new CommonAttachmentFamilyResourceResourceId(command.resourceId),
            command.constraint,
            command.cQMetadata,
        );
    }
}
