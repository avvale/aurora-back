import { SearchEngineCreateCollectionDto } from '../dto';
import { SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionsCommand } from '@app/search-engine/collection';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineCreateCollectionsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: SearchEngineCreateCollectionInput[] | SearchEngineCreateCollectionDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new SearchEngineCreateCollectionsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}