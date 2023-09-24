import { CommonAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { CommonDeleteAttachmentFamilyResourceByIdCommand, CommonFindAttachmentFamilyResourceByIdQuery } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonDeleteAttachmentFamilyResourceByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        attachmentFamilyId: string,
        resourceId: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        const attachmentFamilyResource = await this.queryBus.ask(new CommonFindAttachmentFamilyResourceByIdQuery(
            attachmentFamilyId,
            resourceId,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new CommonDeleteAttachmentFamilyResourceByIdCommand(
            attachmentFamilyId,
            resourceId,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return attachmentFamilyResource;
    }
}
