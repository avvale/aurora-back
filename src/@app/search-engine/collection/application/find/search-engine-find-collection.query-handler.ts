import {
  SearchEngineCollectionMapper,
  SearchEngineCollectionResponse,
  SearchEngineFindCollectionQuery,
} from '@app/search-engine/collection';
import { SearchEngineFindCollectionService } from '@app/search-engine/collection/application/find/search-engine-find-collection.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineFindCollectionQuery)
export class SearchEngineFindCollectionQueryHandler
  implements IQueryHandler<SearchEngineFindCollectionQuery>
{
  private readonly mapper: SearchEngineCollectionMapper =
    new SearchEngineCollectionMapper();

  constructor(
    private readonly findCollectionService: SearchEngineFindCollectionService,
  ) {}

  async execute(
    query: SearchEngineFindCollectionQuery,
  ): Promise<SearchEngineCollectionResponse> {
    const collection = await this.findCollectionService.main(
      query.queryStatement,
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(collection);
  }
}
