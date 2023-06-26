import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { SearchEngineCreateFieldsCommand } from '@app/search-engine/field';
import { searchEngineFields } from '@app/search-engine/field';

@Injectable()
export class SearchEngineFieldSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new SearchEngineCreateFieldsCommand(
            searchEngineFields,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}