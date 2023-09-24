/* eslint-disable key-spacing */
import { CommonCreateAttachmentFamilyResourceCommand } from '@app/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/create/common-create-attachment-family-resource.service';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonCreateAttachmentFamilyResourceCommand)
export class CommonCreateAttachmentFamilyResourceCommandHandler implements ICommandHandler<CommonCreateAttachmentFamilyResourceCommand>
{
    constructor(
        private readonly createAttachmentFamilyResourceService: CommonCreateAttachmentFamilyResourceService,
    ) {}

    async execute(command: CommonCreateAttachmentFamilyResourceCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createAttachmentFamilyResourceService.main(
            {
                attachmentFamilyId: new CommonAttachmentFamilyResourceAttachmentFamilyId(command.payload.attachmentFamilyId),
                resourceId: new CommonAttachmentFamilyResourceResourceId(command.payload.resourceId),
            },
            command.cQMetadata,
        );
    }
}
