import {
  SearchEngineCreateFieldCommand,
  searchEngineMockFieldData,
} from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';
import { SearchEngineCreateFieldCommandHandler } from './search-engine-create-field.command-handler';
import { SearchEngineCreateFieldService } from './search-engine-create-field.service';

describe('SearchEngineCreateFieldCommandHandler', () => {
  let commandHandler: SearchEngineCreateFieldCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineCreateFieldCommandHandler,
        {
          provide: SearchEngineCreateFieldService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler = module.get<SearchEngineCreateFieldCommandHandler>(
      SearchEngineCreateFieldCommandHandler,
    );
  });

  describe('main', () => {
    test('CreateFieldCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the values objects and pass them as parameters to the SearchEngineCreateFieldService', async () => {
      expect(
        await commandHandler.execute(
          new SearchEngineCreateFieldCommand(
            {
              id: searchEngineMockFieldData[0].id,
              collectionId: searchEngineMockFieldData[0].collectionId,
              name: searchEngineMockFieldData[0].name,
              type: searchEngineMockFieldData[0].type,
              isNullable: searchEngineMockFieldData[0].isNullable,
            },
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
