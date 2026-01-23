import {
  SearchEngineCollection,
  SearchEngineUpdateCollectionsInput,
} from '@api/graphql';
import {
  SearchEngineCollectionDto,
  SearchEngineUpdateCollectionsDto,
} from '@api/search-engine/collection';
import {
  SearchEngineGetCollectionsQuery,
  SearchEngineUpdateCollectionsCommand,
} from '@app/search-engine/collection';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpdateCollectionsHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload:
      | SearchEngineUpdateCollectionsInput
      | SearchEngineUpdateCollectionsDto,
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<SearchEngineCollection | SearchEngineCollectionDto> {
    await this.commandBus.dispatch(
      new SearchEngineUpdateCollectionsCommand(
        payload,
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    return await this.queryBus.ask(
      new SearchEngineGetCollectionsQuery(queryStatement, constraint, {
        timezone,
      }),
    );
  }
}
