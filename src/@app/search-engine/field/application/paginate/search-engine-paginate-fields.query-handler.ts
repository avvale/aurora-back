import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { SearchEnginePaginateFieldsQuery } from './search-engine-paginate-fields.query';
import { SearchEnginePaginateFieldsService } from './search-engine-paginate-fields.service';

@QueryHandler(SearchEnginePaginateFieldsQuery)
export class SearchEnginePaginateFieldsQueryHandler implements IQueryHandler<SearchEnginePaginateFieldsQuery>
{
    constructor(
        private readonly paginateFieldsService: SearchEnginePaginateFieldsService,
    ) {}

    async execute(query: SearchEnginePaginateFieldsQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateFieldsService.main(
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