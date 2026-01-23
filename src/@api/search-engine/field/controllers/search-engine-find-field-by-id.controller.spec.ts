import {
  SearchEngineFindFieldByIdController,
  SearchEngineFindFieldByIdHandler,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdController', () => {
  let controller: SearchEngineFindFieldByIdController;
  let handler: SearchEngineFindFieldByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SearchEngineFindFieldByIdController],
      providers: [
        {
          provide: SearchEngineFindFieldByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    controller = module.get<SearchEngineFindFieldByIdController>(
      SearchEngineFindFieldByIdController,
    );
    handler = module.get<SearchEngineFindFieldByIdHandler>(
      SearchEngineFindFieldByIdHandler,
    );
  });

  describe('main', () => {
    test('SearchEngineFindFieldByIdController should be defined', () => {
      expect(controller).toBeDefined();
    });

    test('should return an field by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(await controller.main(searchEngineMockFieldData[0].id)).toBe(
        searchEngineMockFieldData[0],
      );
    });
  });
});
