/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionsHandler', () => {
  let handler: SearchEngineDeleteCollectionsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineDeleteCollectionsHandler,
        {
          provide: IQueryBus,
          useValue: {
            ask: () => {
              /**/
            },
          },
        },
        {
          provide: ICommandBus,
          useValue: {
            dispatch: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    handler = module.get<SearchEngineDeleteCollectionsHandler>(
      SearchEngineDeleteCollectionsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEngineDeleteCollectionsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an searchEngineMockCollectionData deleted', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(searchEngineMockCollectionData)),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        searchEngineMockCollectionData,
      );
    });
  });
});
