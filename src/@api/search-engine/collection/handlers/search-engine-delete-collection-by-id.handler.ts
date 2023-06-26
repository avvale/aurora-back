import { SearchEngineCollectionDto } from '../dto';
import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineDeleteCollectionByIdCommand, SearchEngineFindCollectionByIdQuery } from '@app/search-engine/collection';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineDeleteCollectionByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineCollection | SearchEngineCollectionDto>
    {
        const collection = await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new SearchEngineDeleteCollectionByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return collection;
    }
}