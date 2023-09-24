/* eslint-disable key-spacing */
import { CommonCreateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { CommonCreateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/create/common-create-attachment-families-resources.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonCreateAttachmentFamiliesResourcesCommand)
export class CommonCreateAttachmentFamiliesResourcesCommandHandler implements ICommandHandler<CommonCreateAttachmentFamiliesResourcesCommand>
{
    constructor(
        private readonly createAttachmentFamiliesResourcesService: CommonCreateAttachmentFamiliesResourcesService,
    ) {}

    async execute(command: CommonCreateAttachmentFamiliesResourcesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createAttachmentFamiliesResourcesService.main(
            command.payload
                .map(attachmentFamilyResource =>
                {
                    return {
                        attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(attachmentFamilyResource.attachmentFamilyId),
                        resourceId: new CommonAttachmentFamilyResourceResourceId(attachmentFamilyResource.resourceId),
                    };
                }),
            command.cQMetadata,
        );
    }
}
