import { SearchEngineCreateFieldInput } from '@api/graphql';
import {
  SearchEngineCreateFieldsHandler,
  SearchEngineCreateFieldsResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldsResolver', () => {
  let resolver: SearchEngineCreateFieldsResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineCreateFieldsResolver,
        {
          provide: SearchEngineCreateFieldsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineCreateFieldsResolver>(
      SearchEngineCreateFieldsResolver,
    );
  });

  test('SearchEngineCreateFieldsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineCreateFieldsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an fields created', async () => {
      expect(
        await resolver.main(
          <SearchEngineCreateFieldInput[]>searchEngineMockFieldData,
        ),
      ).toBe(undefined);
    });
  });
});
