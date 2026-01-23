/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineGetFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetFieldsHandler', () => {
  let handler: SearchEngineGetFieldsHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineGetFieldsHandler,
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

    handler = module.get<SearchEngineGetFieldsHandler>(
      SearchEngineGetFieldsHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEngineGetFieldsHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineGetFieldsHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return a searchEngineMockFieldData', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData)),
        );
      expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
        searchEngineMockFieldData,
      );
    });
  });
});
