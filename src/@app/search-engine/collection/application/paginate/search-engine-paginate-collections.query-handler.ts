import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { SearchEnginePaginateCollectionsQuery } from './search-engine-paginate-collections.query';
import { SearchEnginePaginateCollectionsService } from './search-engine-paginate-collections.service';

@QueryHandler(SearchEnginePaginateCollectionsQuery)
export class SearchEnginePaginateCollectionsQueryHandler implements IQueryHandler<SearchEnginePaginateCollectionsQuery>
{
    constructor(
        private readonly paginateCollectionsService: SearchEnginePaginateCollectionsService,
    ) {}

    async execute(query: SearchEnginePaginateCollectionsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateCollectionsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
