/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsHandler', () => {
  let handler: SearchEnginePaginateCollectionsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEnginePaginateCollectionsHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<SearchEnginePaginateCollectionsHandler>(
      SearchEnginePaginateCollectionsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEnginePaginateCollectionsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEnginePaginateCollectionsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a collections', async () => {
      jest.spyOn(queryBus, 'ask').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              total: searchEngineMockCollectionData.length,
              count: searchEngineMockCollectionData.length,
              rows: searchEngineMockCollectionData,
            }),
          ),
      );
      expect(await handler.main({}, {})).toEqual({
        total: searchEngineMockCollectionData.length,
        count: searchEngineMockCollectionData.length,
        rows: searchEngineMockCollectionData,
      });
    });
  });
});
