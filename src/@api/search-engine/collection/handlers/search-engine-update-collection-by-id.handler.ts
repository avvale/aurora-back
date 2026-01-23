import {
  SearchEngineCollection,
  SearchEngineUpdateCollectionByIdInput,
} from '@api/graphql';
import {
  SearchEngineCollectionDto,
  SearchEngineUpdateCollectionByIdDto,
} from '@api/search-engine/collection';
import {
  SearchEngineFindCollectionByIdQuery,
  SearchEngineUpdateCollectionByIdCommand,
} from '@app/search-engine/collection';
import {
  ICommandBus,
  IQueryBus,
  QueryStatement,
  diff,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpdateCollectionByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload:
      | SearchEngineUpdateCollectionByIdInput
      | SearchEngineUpdateCollectionByIdDto,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<SearchEngineCollection | SearchEngineCollectionDto> {
    const collection = await this.queryBus.ask(
      new SearchEngineFindCollectionByIdQuery(payload.id, constraint, {
        timezone,
      }),
    );

    const dataToUpdate = diff(payload, collection);

    await this.commandBus.dispatch(
      new SearchEngineUpdateCollectionByIdCommand(
        {
          ...dataToUpdate,
          id: payload.id,
        },
        constraint,
        {
          timezone,
        },
      ),
    );

    return await this.queryBus.ask(
      new SearchEngineFindCollectionByIdQuery(payload.id, constraint, {
        timezone,
      }),
    );
  }
}
