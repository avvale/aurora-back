import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamilyResourceByIdDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { CommonFindAttachmentFamilyResourceByIdQuery, CommonUpdateAttachmentFamilyResourceByIdCommand } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpdateAttachmentFamilyResourceByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonUpdateAttachmentFamilyResourceByIdInput | CommonUpdateAttachmentFamilyResourceByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        const attachmentFamilyResource = await this.queryBus.ask(new CommonFindAttachmentFamilyResourceByIdQuery(
            payload.attachmentFamilyId,
            payload.resourceId,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, attachmentFamilyResource);

        await this.commandBus.dispatch(new CommonUpdateAttachmentFamilyResourceByIdCommand(
            {
                ...dataToUpdate,
                attachmentFamilyId: payload.attachmentFamilyId,
                resourceId: payload.resourceId,
            },
            constraint,
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
            constraint,
            {
                timezone,
            },
        ));
    }
}
