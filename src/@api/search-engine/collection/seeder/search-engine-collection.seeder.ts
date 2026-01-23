import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

//
import {
  SearchEngineCreateCollectionsCommand,
  searchEngineMockCollectionData,
} from '@app/search-engine/collection';

@Injectable()
export class SearchEngineCollectionSeeder {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(): Promise<boolean> {
    await this.commandBus.dispatch(
      new SearchEngineCreateCollectionsCommand(searchEngineMockCollectionData, {
        timezone: process.env.TZ,
      }),
    );

    return true;
  }
}
