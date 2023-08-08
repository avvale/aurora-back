import { SearchEngineField } from '@api/graphql';
import { SearchEngineFieldDto } from '@api/search-engine/field';
import { SearchEngineFindFieldByIdQuery } from '@app/search-engine/field';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindFieldByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField | SearchEngineFieldDto>
    {
        return await this.queryBus.ask(new SearchEngineFindFieldByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
