import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { SearchEngineCreateCollectionsCommand } from '@app/search-engine/collection';
import { searchEngineCollections } from '@app/search-engine/collection';

@Injectable()
export class SearchEngineCollectionSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new SearchEngineCreateCollectionsCommand(
            searchEngineCollections,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}