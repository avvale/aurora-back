import {
  SearchEngineField,
  SearchEngineUpdateFieldByIdInput,
} from '@api/graphql';
import {
  SearchEngineFieldDto,
  SearchEngineUpdateFieldByIdDto,
} from '@api/search-engine/field';
import {
  SearchEngineFindFieldByIdQuery,
  SearchEngineUpsertFieldCommand,
} from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpsertFieldHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: SearchEngineUpdateFieldByIdInput | SearchEngineUpdateFieldByIdDto,
    timezone?: string,
  ): Promise<SearchEngineField | SearchEngineFieldDto> {
    await this.commandBus.dispatch(
      new SearchEngineUpsertFieldCommand(payload, {
        timezone,
      }),
    );

    return await this.queryBus.ask(
      new SearchEngineFindFieldByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
