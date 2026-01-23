import {
  SearchEngineDeleteCollectionsController,
  SearchEngineDeleteCollectionsHandler,
} from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionsController', () => {
  let controller: SearchEngineDeleteCollectionsController;
  let handler: SearchEngineDeleteCollectionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineDeleteCollectionsController],
      providers: [
        {
          provide: SearchEngineDeleteCollectionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineDeleteCollectionsController>(
      SearchEngineDeleteCollectionsController,
    );
    handler = module.get<SearchEngineDeleteCollectionsHandler>(
      SearchEngineDeleteCollectionsHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an searchEngineMockCollectionData deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(searchEngineMockCollectionData)),
        );
      expect(await controller.main()).toBe(searchEngineMockCollectionData);
    });
  });
});
