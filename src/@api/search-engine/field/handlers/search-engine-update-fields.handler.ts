import { SearchEngineField, SearchEngineUpdateFieldsInput } from '@api/graphql';
import {
  SearchEngineFieldDto,
  SearchEngineUpdateFieldsDto,
} from '@api/search-engine/field';
import {
  SearchEngineGetFieldsQuery,
  SearchEngineUpdateFieldsCommand,
} from '@app/search-engine/field';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpdateFieldsHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: SearchEngineUpdateFieldsInput | SearchEngineUpdateFieldsDto,
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<SearchEngineField | SearchEngineFieldDto> {
    await this.commandBus.dispatch(
      new SearchEngineUpdateFieldsCommand(payload, queryStatement, constraint, {
        timezone,
      }),
    );

    return await this.queryBus.ask(
      new SearchEngineGetFieldsQuery(queryStatement, constraint, {
        timezone,
      }),
    );
  }
}
