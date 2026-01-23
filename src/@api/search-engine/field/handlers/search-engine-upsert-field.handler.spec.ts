/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpsertFieldHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertFieldHandler', () => {
  let handler: SearchEngineUpsertFieldHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineUpsertFieldHandler,
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

    handler = module.get<SearchEngineUpsertFieldHandler>(
      SearchEngineUpsertFieldHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  describe('main', () => {
    test('SearchEngineUpsertFieldHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an field upserted', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(
        await handler.main(searchEngineMockFieldData[0], 'Europe/Madrid'),
      ).toBe(searchEngineMockFieldData[0]);
    });
  });
});
