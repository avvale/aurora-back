import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { SearchEngineCreateCollectionsCommand } from '@app/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';

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
            searchEngineMockCollectionData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
