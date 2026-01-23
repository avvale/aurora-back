/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import {
  SearchEngineUpdateFieldByIdHandler,
  SearchEngineUpdateFieldByIdResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldByIdResolver', () => {
  let resolver: SearchEngineUpdateFieldByIdResolver;
  let handler: SearchEngineUpdateFieldByIdHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineUpdateFieldByIdResolver,
        {
          provide: SearchEngineUpdateFieldByIdHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineUpdateFieldByIdResolver>(
      SearchEngineUpdateFieldByIdResolver,
    );
    handler = module.get<SearchEngineUpdateFieldByIdHandler>(
      SearchEngineUpdateFieldByIdHandler,
    );
  });

  test('SearchEngineUpdateFieldByIdResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineUpdateFieldByIdResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a field by id updated', async () => {
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
