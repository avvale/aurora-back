import { SearchEngineCollectionDto, SearchEngineCreateCollectionDto } from '../dto';
import { SearchEngineCollection, SearchEngineCollectionStatus, SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionCommand, SearchEngineFindCollectionByIdQuery } from '@app/search-engine/collection';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineCreateCollectionHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SearchEngineCreateCollectionInput | SearchEngineCreateCollectionDto,
        timezone?: string,
    ): Promise<SearchEngineCollection | SearchEngineCollectionDto>
    {
        await this.commandBus.dispatch(new SearchEngineCreateCollectionCommand(
            {
                ...payload,
                status: SearchEngineCollectionStatus.CONSOLIDATED,
            },
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