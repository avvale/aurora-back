/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionHandler', () => {
  let handler: SearchEngineFindCollectionHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineFindCollectionHandler,
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

    handler = module.get<SearchEngineFindCollectionHandler>(
      SearchEngineFindCollectionHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEngineFindCollectionHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineFindCollectionHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a collection', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(searchEngineMockCollectionData[0]),
            ),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        searchEngineMockCollectionData[0],
      );
    });
  });
});
