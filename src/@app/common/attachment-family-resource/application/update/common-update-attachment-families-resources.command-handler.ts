/* eslint-disable key-spacing */
import { CommonUpdateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-families-resources.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonUpdateAttachmentFamiliesResourcesCommand)
export class CommonUpdateAttachmentFamiliesResourcesCommandHandler implements ICommandHandler<CommonUpdateAttachmentFamiliesResourcesCommand>
{
    constructor(
        private readonly updateAttachmentFamiliesResourcesService: CommonUpdateAttachmentFamiliesResourcesService,
    ) {}

    async execute(command: CommonUpdateAttachmentFamiliesResourcesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateAttachmentFamiliesResourcesService.main(
            {
                attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(command.payload.attachmentFamilyId, { undefinable: true }),
                resourceId: new CommonAttachmentFamilyResourceResourceId(command.payload.resourceId, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}
