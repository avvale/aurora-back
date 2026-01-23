/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { SearchEngineUpdateCollectionByIdHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionByIdHandler', () => {
  let handler: SearchEngineUpdateCollectionByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineUpdateCollectionByIdHandler,
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

    handler = module.get<SearchEngineUpdateCollectionByIdHandler>(
      SearchEngineUpdateCollectionByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEngineUpdateCollectionByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineUpdateCollectionByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a collection updated', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(searchEngineMockCollectionData[0]),
            ),
        );
      expect(
        await handler.main(
          <SearchEngineUpdateCollectionByIdInput>(
            searchEngineMockCollectionData[0]
          ),
          {},
          'Europe/Madrid',
        ),
      ).toBe(searchEngineMockCollectionData[0]);
    });
  });
});
