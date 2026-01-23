import {
  SearchEngineUpdateFieldsController,
  SearchEngineUpdateFieldsHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldsController', () => {
  let controller: SearchEngineUpdateFieldsController;
  let handler: SearchEngineUpdateFieldsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineUpdateFieldsController],
      providers: [
        {
          provide: SearchEngineUpdateFieldsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineUpdateFieldsController>(
      SearchEngineUpdateFieldsController,
    );
    handler = module.get<SearchEngineUpdateFieldsHandler>(
      SearchEngineUpdateFieldsHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineUpdateFieldsController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return a fields updated', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(await controller.main(searchEngineMockFieldData[0])).toBe(
        searchEngineMockFieldData[0],
      );
    });
  });
});
