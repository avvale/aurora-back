import { Pagination } from '@api/graphql';
import { CommonPaginateAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonPaginateAttachmentFamiliesResourcesHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new CommonPaginateAttachmentFamiliesResourcesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
