import {
  SearchEngineGetFieldsController,
  SearchEngineGetFieldsHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetFieldsController', () => {
  let controller: SearchEngineGetFieldsController;
  let handler: SearchEngineGetFieldsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineGetFieldsController],
      providers: [
        {
          provide: SearchEngineGetFieldsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineGetFieldsController>(
      SearchEngineGetFieldsController,
    );
    handler = module.get<SearchEngineGetFieldsHandler>(
      SearchEngineGetFieldsHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineGetFieldsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a searchEngineMockFieldData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData)),
        );
      expect(await controller.main()).toBe(searchEngineMockFieldData);
    });
  });
});
