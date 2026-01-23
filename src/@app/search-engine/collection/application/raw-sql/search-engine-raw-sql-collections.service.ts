import {
  SearchEngineCollection,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineRawSQLCollectionsService {
  constructor(private readonly repository: SearchEngineICollectionRepository) {}

  async main(
    rawSQL?: string,
    cQMetadata?: CQMetadata,
  ): Promise<SearchEngineCollection[]> {
    return await this.repository.rawSQL({
      rawSQL,
      cQMetadata,
    });
  }
}
