import { CommonAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { CommonDeleteAttachmentFamiliesResourcesCommand, CommonGetAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonDeleteAttachmentFamiliesResourcesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource[] | CommonAttachmentFamilyResourceDto[]>
    {
        const attachmentFamiliesResources = await this.queryBus.ask(new CommonGetAttachmentFamiliesResourcesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new CommonDeleteAttachmentFamiliesResourcesCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return attachmentFamiliesResources;
    }
}
