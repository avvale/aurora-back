import {
  SearchEngineCollectionMapper,
  SearchEngineCollectionResponse,
  SearchEngineGetCollectionsQuery,
} from '@app/search-engine/collection';
import { SearchEngineGetCollectionsService } from '@app/search-engine/collection/application/get/search-engine-get-collections.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineGetCollectionsQuery)
export class SearchEngineGetCollectionsQueryHandler
  implements IQueryHandler<SearchEngineGetCollectionsQuery>
{
  private readonly mapper: SearchEngineCollectionMapper =
    new SearchEngineCollectionMapper();

  constructor(
    private readonly getCollectionsService: SearchEngineGetCollectionsService,
  ) {}

  async execute(
    query: SearchEngineGetCollectionsQuery,
  ): Promise<SearchEngineCollectionResponse[]> {
    return this.mapper.mapAggregatesToResponses(
      await this.getCollectionsService.main(
        query.queryStatement,
        query.constraint,
        query.cQMetadata,
      ),
    );
  }
}
