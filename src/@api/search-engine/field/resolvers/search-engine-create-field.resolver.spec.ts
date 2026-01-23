/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineCreateFieldInput } from '@api/graphql';
import {
  SearchEngineCreateFieldHandler,
  SearchEngineCreateFieldResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldResolver', () => {
  let resolver: SearchEngineCreateFieldResolver;
  let handler: SearchEngineCreateFieldHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineCreateFieldResolver,
        {
          provide: SearchEngineCreateFieldHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineCreateFieldResolver>(
      SearchEngineCreateFieldResolver,
    );
    handler = module.get<SearchEngineCreateFieldHandler>(
      SearchEngineCreateFieldHandler,
    );
  });

  test('SearchEngineCreateFieldResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineCreateFieldResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an field created', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData[0])),
        );
      expect(
        await resolver.main(
          <SearchEngineCreateFieldInput>searchEngineMockFieldData[0],
        ),
      ).toBe(searchEngineMockFieldData[0]);
    });
  });
});
