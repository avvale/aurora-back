import { SearchEngineFieldDto } from '../dto';
import { SearchEngineField } from '@api/graphql';
import { SearchEngineFindFieldQuery } from '@app/search-engine/field';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindFieldHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField | SearchEngineFieldDto>
    {
        return await this.queryBus.ask(new SearchEngineFindFieldQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}