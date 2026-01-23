/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindFieldByIdHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdHandler', () => {
  let handler: SearchEngineFindFieldByIdHandler;
  let queryBus: IQueryBus;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineFindFieldByIdHandler,
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

    handler = module.get<SearchEngineFindFieldByIdHandler>(
      SearchEngineFindFieldByIdHandler,
    );
    queryBus = module.get<IQueryBus>(IQueryBus);
  });

  test('SearchEngineFindFieldByIdHandler should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineFindFieldByIdHandler should be defined', () => {
      expect(handler).toBeDefined();
    });

    test('should return an field by id', async () => {
      jest
        .spyOn(queryBus, 'ask')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(
        await handler.main(
          searchEngineMockFieldData[0].id,
          {},
          'Europe/Madrid',
        ),
      ).toBe(searchEngineMockFieldData[0]);
    });
  });
});
