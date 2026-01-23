import {
  SearchEngineCreateFieldController,
  SearchEngineCreateFieldHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldController', () => {
  let controller: SearchEngineCreateFieldController;
  let handler: SearchEngineCreateFieldHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineCreateFieldController],
      providers: [
        {
          provide: SearchEngineCreateFieldHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineCreateFieldController>(
      SearchEngineCreateFieldController,
    );
    handler = module.get<SearchEngineCreateFieldHandler>(
      SearchEngineCreateFieldHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineCreateFieldController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an field created', async () => {
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
