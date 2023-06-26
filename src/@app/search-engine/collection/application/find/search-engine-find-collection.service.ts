import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindCollectionService
{
    constructor(
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<SearchEngineCollection>
    {
        return await this.repository.find(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );
    }
}