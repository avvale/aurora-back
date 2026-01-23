import { SearchEnginePaginateCollectionsQuery } from '@app/search-engine/collection';
import { SearchEnginePaginateCollectionsService } from '@app/search-engine/collection/application/paginate/search-engine-paginate-collections.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEnginePaginateCollectionsQuery)
export class SearchEnginePaginateCollectionsQueryHandler
  implements IQueryHandler<SearchEnginePaginateCollectionsQuery>
{
  constructor(
    private readonly paginateCollectionsService: SearchEnginePaginateCollectionsService,
  ) {}

  async execute(
    query: SearchEnginePaginateCollectionsQuery,
  ): Promise<PaginationResponse> {
    const { total, count, rows } = await this.paginateCollectionsService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return new PaginationResponse(
      total,
      count,
      rows.map((item) => item.toDTO()),
    );
  }
}
