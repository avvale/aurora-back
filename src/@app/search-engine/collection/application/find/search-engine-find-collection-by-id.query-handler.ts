import {
  SearchEngineCollectionMapper,
  SearchEngineCollectionResponse,
  SearchEngineFindCollectionByIdQuery,
} from '@app/search-engine/collection';
import { SearchEngineFindCollectionByIdService } from '@app/search-engine/collection/application/find/search-engine-find-collection-by-id.service';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineFindCollectionByIdQuery)
export class SearchEngineFindCollectionByIdQueryHandler
  implements IQueryHandler<SearchEngineFindCollectionByIdQuery>
{
  private readonly mapper: SearchEngineCollectionMapper =
    new SearchEngineCollectionMapper();

  constructor(
    private readonly findCollectionByIdService: SearchEngineFindCollectionByIdService,
  ) {}

  async execute(
    query: SearchEngineFindCollectionByIdQuery,
  ): Promise<SearchEngineCollectionResponse> {
    const collection = await this.findCollectionByIdService.main(
      new SearchEngineCollectionId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(collection);
  }
}
