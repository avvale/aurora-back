import {
  SearchEngineFindCollectionByIdController,
  SearchEngineFindCollectionByIdHandler,
} from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionByIdController', () => {
  let controller: SearchEngineFindCollectionByIdController;
  let handler: SearchEngineFindCollectionByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineFindCollectionByIdController],
      providers: [
        {
          provide: SearchEngineFindCollectionByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineFindCollectionByIdController>(
      SearchEngineFindCollectionByIdController,
    );
    handler = module.get<SearchEngineFindCollectionByIdHandler>(
      SearchEngineFindCollectionByIdHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineFindCollectionByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an collection by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(searchEngineMockCollectionData[0]),
            ),
        );
      expect(await controller.main(searchEngineMockCollectionData[0].id)).toBe(
        searchEngineMockCollectionData[0],
      );
    });
  });
});
