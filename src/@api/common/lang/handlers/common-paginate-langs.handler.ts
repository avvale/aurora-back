import { Pagination } from '@api/graphql';
import { PaginateLangsQuery } from '@app/common/lang/application/paginate/paginate-langs.query';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonPaginateLangsHandler
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
        return await this.queryBus.ask(new PaginateLangsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}