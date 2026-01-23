import {
  SearchEngineGetCollectionsController,
  SearchEngineGetCollectionsHandler,
} from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetCollectionsController', () => {
  let controller: SearchEngineGetCollectionsController;
  let handler: SearchEngineGetCollectionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineGetCollectionsController],
      providers: [
        {
          provide: SearchEngineGetCollectionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineGetCollectionsController>(
      SearchEngineGetCollectionsController,
    );
    handler = module.get<SearchEngineGetCollectionsHandler>(
      SearchEngineGetCollectionsHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineGetCollectionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a searchEngineMockCollectionData', async () => {
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
