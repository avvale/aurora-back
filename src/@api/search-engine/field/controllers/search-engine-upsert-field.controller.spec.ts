import {
  SearchEngineUpsertFieldController,
  SearchEngineUpsertFieldHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertFieldController', () => {
  let controller: SearchEngineUpsertFieldController;
  let handler: SearchEngineUpsertFieldHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineUpsertFieldController],
      providers: [
        {
          provide: SearchEngineUpsertFieldHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineUpsertFieldController>(
      SearchEngineUpsertFieldController,
    );
    handler = module.get<SearchEngineUpsertFieldHandler>(
      SearchEngineUpsertFieldHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineUpsertFieldController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an field upserted', async () => {
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
