/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineFindFieldByIdHandler,
  SearchEngineFindFieldByIdResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdResolver', () => {
  let resolver: SearchEngineFindFieldByIdResolver;
  let handler: SearchEngineFindFieldByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineFindFieldByIdResolver,
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

    resolver = module.get<SearchEngineFindFieldByIdResolver>(
      SearchEngineFindFieldByIdResolver,
    );
    handler = module.get<SearchEngineFindFieldByIdHandler>(
      SearchEngineFindFieldByIdHandler,
    );
  });

  test('SearchEngineFindFieldByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineFindFieldByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an field by id', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(await resolver.main(searchEngineMockFieldData[0].id)).toBe(
        searchEngineMockFieldData[0],
      );
    });
  });
});
