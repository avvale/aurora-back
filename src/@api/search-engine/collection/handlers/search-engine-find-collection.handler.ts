import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineCollectionDto } from '@api/search-engine/collection';
import { SearchEngineFindCollectionQuery } from '@app/search-engine/collection';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineFindCollectionHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<SearchEngineCollection | SearchEngineCollectionDto> {
    return await this.queryBus.ask(
      new SearchEngineFindCollectionQuery(queryStatement, constraint, {
        timezone,
      }),
    );
  }
}
