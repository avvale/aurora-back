/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import {
  SearchEngineUpsertFieldHandler,
  SearchEngineUpsertFieldResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertFieldResolver', () => {
  let resolver: SearchEngineUpsertFieldResolver;
  let handler: SearchEngineUpsertFieldHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineUpsertFieldResolver,
        {
          provide: SearchEngineUpsertFieldHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineUpsertFieldResolver>(
      SearchEngineUpsertFieldResolver,
    );
    handler = module.get<SearchEngineUpsertFieldHandler>(
      SearchEngineUpsertFieldHandler,
    );
  });

  test('SearchEngineUpsertFieldResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineUpsertFieldResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an field upserted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(
        await resolver.main(
          <SearchEngineUpdateFieldByIdInput>searchEngineMockFieldData[0],
        ),
      ).toBe(searchEngineMockFieldData[0]);
    });
  });
});
