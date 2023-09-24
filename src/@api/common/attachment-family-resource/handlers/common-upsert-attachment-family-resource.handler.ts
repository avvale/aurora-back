import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamilyResourceByIdDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { CommonFindAttachmentFamilyResourceByIdQuery, CommonUpsertAttachmentFamilyResourceCommand } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpsertAttachmentFamilyResourceHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonUpdateAttachmentFamilyResourceByIdInput | CommonUpdateAttachmentFamilyResourceByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        await this.commandBus.dispatch(new CommonUpsertAttachmentFamilyResourceCommand(
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
