import { Injectable } from '@nestjs/common';
import { QueryStatement } from '@aurorajs.dev/core';
import { Pagination } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';

@Injectable()
export class SearchEnginePaginateCollectionsService
{
    constructor(
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<SearchEngineCollection>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
