import { SearchEngineCollectionDto, SearchEngineUpdateCollectionByIdDto } from '../dto';
import { SearchEngineCollection, SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { SearchEngineFindCollectionByIdQuery, SearchEngineUpsertCollectionCommand } from '@app/search-engine/collection';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpsertCollectionHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SearchEngineUpdateCollectionByIdInput | SearchEngineUpdateCollectionByIdDto,
        timezone?: string,
    ): Promise<SearchEngineCollection | SearchEngineCollectionDto>
    {
        await this.commandBus.dispatch(new SearchEngineUpsertCollectionCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}