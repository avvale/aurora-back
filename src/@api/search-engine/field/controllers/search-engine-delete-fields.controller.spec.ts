import {
  SearchEngineDeleteFieldsController,
  SearchEngineDeleteFieldsHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsController', () => {
  let controller: SearchEngineDeleteFieldsController;
  let handler: SearchEngineDeleteFieldsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineDeleteFieldsController],
      providers: [
        {
          provide: SearchEngineDeleteFieldsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineDeleteFieldsController>(
      SearchEngineDeleteFieldsController,
    );
    handler = module.get<SearchEngineDeleteFieldsHandler>(
      SearchEngineDeleteFieldsHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineDeleteFieldsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an searchEngineMockFieldData deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData)),
        );
      expect(await controller.main()).toBe(searchEngineMockFieldData);
    });
  });
});
