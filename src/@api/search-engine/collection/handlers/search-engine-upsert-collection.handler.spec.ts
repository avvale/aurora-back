/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpsertCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionHandler', () => {
  let handler: SearchEngineUpsertCollectionHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineUpsertCollectionHandler,
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

    handler = module.get<SearchEngineUpsertCollectionHandler>(
      SearchEngineUpsertCollectionHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('SearchEngineUpsertCollectionHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an collection upserted', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(searchEngineMockCollectionData[0]),
            ),
        );
      expect(
        await handler.main(searchEngineMockCollectionData[0], 'Europe/Madrid'),
      ).toBe(searchEngineMockCollectionData[0]);
    });
  });
});
