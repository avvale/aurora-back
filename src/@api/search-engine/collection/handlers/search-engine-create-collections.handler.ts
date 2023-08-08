import { SearchEngineCollectionStatus, SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionDto } from '@api/search-engine/collection';
import { SearchEngineCreateCollectionsCommand } from '@app/search-engine/collection';
import { ICommandBus } from '@aurorajs.dev/core';
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
            payload.map(collection => ({
                ...collection,
                status: SearchEngineCollectionStatus.CONSOLIDATED,
            })),
            {
                timezone,
            },
        ));

        return true;
    }
}
