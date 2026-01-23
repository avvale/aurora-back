import {
  SearchEngineDeleteCollectionByIdCommand,
  searchEngineMockCollectionData,
} from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionByIdCommandHandler } from '@app/search-engine/collection/application/delete/search-engine-delete-collection-by-id.command-handler';
import { SearchEngineDeleteCollectionByIdService } from '@app/search-engine/collection/application/delete/search-engine-delete-collection-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdCommandHandler', () => {
  let commandHandler: SearchEngineDeleteCollectionByIdCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineDeleteCollectionByIdCommandHandler,
        {
          provide: SearchEngineDeleteCollectionByIdService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler = module.get<SearchEngineDeleteCollectionByIdCommandHandler>(
      SearchEngineDeleteCollectionByIdCommandHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionByIdCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should create the value object id and pass them as parameters to the SearchEngineDeleteCollectionByIdService', async () => {
      expect(
        await commandHandler.execute(
          new SearchEngineDeleteCollectionByIdCommand(
            searchEngineMockCollectionData[0].id,
          ),
        ),
      ).toBe(undefined);
    });
  });
});
