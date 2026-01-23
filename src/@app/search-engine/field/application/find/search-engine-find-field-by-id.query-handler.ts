import {
  SearchEngineFieldMapper,
  SearchEngineFieldResponse,
  SearchEngineFindFieldByIdQuery,
} from '@app/search-engine/field';
import { SearchEngineFindFieldByIdService } from '@app/search-engine/field/application/find/search-engine-find-field-by-id.service';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SearchEngineFindFieldByIdQuery)
export class SearchEngineFindFieldByIdQueryHandler
  implements IQueryHandler<SearchEngineFindFieldByIdQuery>
{
  private readonly mapper: SearchEngineFieldMapper =
    new SearchEngineFieldMapper();

  constructor(
    private readonly findFieldByIdService: SearchEngineFindFieldByIdService,
  ) {}

  async execute(
    query: SearchEngineFindFieldByIdQuery,
  ): Promise<SearchEngineFieldResponse> {
    const field = await this.findFieldByIdService.main(
      new SearchEngineFieldId(query.id),
      query.constraint,
      query.cQMetadata,
    );

    return this.mapper.mapAggregateToResponse(field);
  }
}
