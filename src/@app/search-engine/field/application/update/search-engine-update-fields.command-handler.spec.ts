import {
  searchEngineMockFieldData,
  SearchEngineUpdateFieldsCommand,
} from '@app/search-engine/field';
import { SearchEngineUpdateFieldsCommandHandler } from '@app/search-engine/field/application/update/search-engine-update-fields.command-handler';
import { SearchEngineUpdateFieldsService } from '@app/search-engine/field/application/update/search-engine-update-fields.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldsCommandHandler', () => {
  let commandHandler: SearchEngineUpdateFieldsCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineUpdateFieldsCommandHandler,
        {
          provide: SearchEngineUpdateFieldsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler = module.get<SearchEngineUpdateFieldsCommandHandler>(
      SearchEngineUpdateFieldsCommandHandler,
    );
  });

  describe('main', () => {
    test('UpdateFieldsCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return an fields updated', async () => {
      expect(
        await commandHandler.execute(
          new SearchEngineUpdateFieldsCommand(
            {
              id: searchEngineMockFieldData[0].id,
              collectionId: searchEngineMockFieldData[0].collectionId,
              name: searchEngineMockFieldData[0].name,
              type: searchEngineMockFieldData[0].type,
              isNullable: searchEngineMockFieldData[0].isNullable,
            },
            {},
            {},
            { timezone: process.env.TZ },
          ),
        ),
      ).toBe(undefined);
    });
  });
});
