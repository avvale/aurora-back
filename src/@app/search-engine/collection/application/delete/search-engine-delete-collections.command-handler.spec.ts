import { SearchEngineDeleteCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionsCommandHandler } from '@app/search-engine/collection/application/delete/search-engine-delete-collections.command-handler';
import { SearchEngineDeleteCollectionsService } from '@app/search-engine/collection/application/delete/search-engine-delete-collections.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionsCommandHandler', () => {
  let commandHandler: SearchEngineDeleteCollectionsCommandHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineDeleteCollectionsCommandHandler,
        {
          provide: SearchEngineDeleteCollectionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    commandHandler = module.get<SearchEngineDeleteCollectionsCommandHandler>(
      SearchEngineDeleteCollectionsCommandHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionsCommandHandler should be defined', () => {
      expect(commandHandler).toBeDefined();
    });

    test('should return void', async () => {
      expect(
        await commandHandler.execute(
          new SearchEngineDeleteCollectionsCommand(),
        ),
      ).toBe(undefined);
    });
  });
});
