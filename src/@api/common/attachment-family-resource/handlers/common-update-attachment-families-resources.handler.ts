import { CommonAttachmentFamilyResourceDto, CommonUpdateAttachmentFamiliesResourcesDto } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamiliesResourcesInput } from '@api/graphql';
import { CommonGetAttachmentFamiliesResourcesQuery, CommonUpdateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpdateAttachmentFamiliesResourcesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonUpdateAttachmentFamiliesResourcesInput | CommonUpdateAttachmentFamiliesResourcesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource | CommonAttachmentFamilyResourceDto>
    {
        await this.commandBus.dispatch(new CommonUpdateAttachmentFamiliesResourcesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new CommonGetAttachmentFamiliesResourcesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
