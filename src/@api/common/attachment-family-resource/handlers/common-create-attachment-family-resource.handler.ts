import { CommonAttachmentFamilyResourceDto, CommonCreateAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { CommonCreateAttachmentFamilyResourceCommand, CommonFindAttachmentFamilyResourceByIdQuery } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonCreateAttachmentFamilyResourceHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonCreateAttachmentFamilyResourceInput | CommonCreateAttachmentFamilyResourceDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        await this.commandBus.dispatch(new CommonCreateAttachmentFamilyResourceCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new CommonFindAttachmentFamilyResourceByIdQuery(
            payload.attachmentFamilyId,
            payload.resourceId,
            {},
            {
                timezone,
            },
        ));
    }
}
