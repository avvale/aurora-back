import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

//
import {
  SearchEngineCreateFieldsCommand,
  searchEngineMockFieldData,
} from '@app/search-engine/field';

@Injectable()
export class SearchEngineFieldSeeder {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(): Promise<boolean> {
    await this.commandBus.dispatch(
      new SearchEngineCreateFieldsCommand(searchEngineMockFieldData, {
        timezone: process.env.TZ,
      }),
    );

    return true;
  }
}
