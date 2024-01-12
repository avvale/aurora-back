import { SearchEnginePaginateFieldsQuery } from '@app/search-engine/field';
import { SearchEnginePaginateFieldsService } from '@app/search-engine/field/application/paginate/search-engine-paginate-fields.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

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
