import {
  SearchEngineField,
  SearchEngineIFieldRepository,
} from '@app/search-engine/field';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineGetFieldsService {
  constructor(private readonly repository: SearchEngineIFieldRepository) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<SearchEngineField[]> {
    return await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });
  }
}
