import {
  SearchEngineCollection,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEnginePaginateCollectionsService {
  constructor(private readonly repository: SearchEngineICollectionRepository) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<Pagination<SearchEngineCollection>> {
    return await this.repository.paginate({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
