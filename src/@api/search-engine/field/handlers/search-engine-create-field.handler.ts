import { SearchEngineCreateFieldInput, SearchEngineField } from '@api/graphql';
import {
  SearchEngineCreateFieldDto,
  SearchEngineFieldDto,
} from '@api/search-engine/field';
import {
  SearchEngineCreateFieldCommand,
  SearchEngineFindFieldByIdQuery,
} from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineCreateFieldHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: SearchEngineCreateFieldInput | SearchEngineCreateFieldDto,
    timezone?: string,
  ): Promise<SearchEngineField | SearchEngineFieldDto> {
    await this.commandBus.dispatch(
      new SearchEngineCreateFieldCommand(payload, {
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
