import { SearchEngineField, SearchEngineIFieldRepository } from '@app/search-engine/field';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEnginePaginateFieldsService
{
    constructor(
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<SearchEngineField>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
