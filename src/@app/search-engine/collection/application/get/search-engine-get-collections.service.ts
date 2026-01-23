import {
  SearchEngineCollection,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineGetCollectionsService {
  constructor(private readonly repository: SearchEngineICollectionRepository) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<SearchEngineCollection[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
