import { SearchEngineCollectionDto } from '../dto';
import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineFindCollectionByIdQuery } from '@app/search-engine/collection';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindCollectionByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineCollection | SearchEngineCollectionDto>
    {
        return await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}