import { Injectable } from '@nestjs/common';
import { CQMetadata } from '@aurorajs.dev/core';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';

@Injectable()
export class SearchEngineRawSQLCollectionsService
{
    constructor(
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineCollection[]>
    {
        return await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}