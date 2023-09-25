/* eslint-disable key-spacing */
import { CommonCreateAttachmentFamilyCommand } from '@app/common/attachment-family';
import { CommonCreateAttachmentFamilyService } from '@app/common/attachment-family/application/create/common-create-attachment-family.service';
import {
    CommonAttachmentFamilyCode,
    CommonAttachmentFamilyFitType,
    CommonAttachmentFamilyFormat,
    CommonAttachmentFamilyHeight,
    CommonAttachmentFamilyId,
    CommonAttachmentFamilyName,
    CommonAttachmentFamilyQuality,
    CommonAttachmentFamilySizes,
    CommonAttachmentFamilyWidth,
} from '@app/common/attachment-family/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(CommonCreateAttachmentFamilyCommand)
export class CommonCreateAttachmentFamilyCommandHandler implements ICommandHandler<CommonCreateAttachmentFamilyCommand>
{
    constructor(
        private readonly createAttachmentFamilyService: CommonCreateAttachmentFamilyService,
    ) {}

    async execute(command: CommonCreateAttachmentFamilyCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createAttachmentFamilyService.main(
            {
                id: new CommonAttachmentFamilyId(command.payload.id),
                name: new CommonAttachmentFamilyName(command.payload.name),
                code: new CommonAttachmentFamilyCode(command.payload.code),
                width: new CommonAttachmentFamilyWidth(command.payload.width),
                height: new CommonAttachmentFamilyHeight(command.payload.height),
                fitType: new CommonAttachmentFamilyFitType(command.payload.fitType),
                quality: new CommonAttachmentFamilyQuality(command.payload.quality),
                sizes: new CommonAttachmentFamilySizes(command.payload.sizes),
                format: new CommonAttachmentFamilyFormat(command.payload.format),
            },
            command.cQMetadata,
        );
    }
}
