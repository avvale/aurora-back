import { SearchEngineField } from '@api/graphql';
import { SearchEngineFieldDto } from '@api/search-engine/field';
import { SearchEngineGetFieldsQuery } from '@app/search-engine/field';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineGetFieldsHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField[] | SearchEngineFieldDto[]>
    {
        return await this.queryBus.ask(new SearchEngineGetFieldsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
