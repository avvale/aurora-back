import {
  SearchEngineCreateCollectionsController,
  SearchEngineCreateCollectionsHandler,
} from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionsController', () => {
  let controller: SearchEngineCreateCollectionsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchEngineCreateCollectionsController],
      providers: [
        {
          provide: SearchEngineCreateCollectionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineCreateCollectionsController>(
      SearchEngineCreateCollectionsController,
    );
  });

  describe('main', () => {
    test('SearchEngineCreateCollectionsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an searchEngineMockCollectionData created', async () => {
      expect(await controller.main(searchEngineMockCollectionData)).toBe(
        undefined,
      );
    });
  });
});
