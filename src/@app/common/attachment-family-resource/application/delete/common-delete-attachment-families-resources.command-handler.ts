import { CommonDeleteAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { CommonDeleteAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-families-resources.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonDeleteAttachmentFamiliesResourcesCommand)
export class CommonDeleteAttachmentFamiliesResourcesCommandHandler implements ICommandHandler<CommonDeleteAttachmentFamiliesResourcesCommand>
{
    constructor(
        private readonly deleteAttachmentFamiliesResourcesService: CommonDeleteAttachmentFamiliesResourcesService,
    ) {}

    async execute(command: CommonDeleteAttachmentFamiliesResourcesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteAttachmentFamiliesResourcesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
