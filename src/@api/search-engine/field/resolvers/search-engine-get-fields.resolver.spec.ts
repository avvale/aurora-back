/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineGetFieldsHandler,
  SearchEngineGetFieldsResolver,
} from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetFieldsResolver', () => {
  let resolver: SearchEngineGetFieldsResolver;
  let handler: SearchEngineGetFieldsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineGetFieldsResolver,
        {
          provide: SearchEngineGetFieldsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineGetFieldsResolver>(
      SearchEngineGetFieldsResolver,
    );
    handler = module.get<SearchEngineGetFieldsHandler>(
      SearchEngineGetFieldsHandler,
    );
  });

  test('SearchEngineGetFieldsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineGetFieldsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return a searchEngineMockFieldData', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () => new Promise((resolve) => resolve(searchEngineMockFieldData)),
        );
      expect(await resolver.main()).toBe(searchEngineMockFieldData);
    });
  });
});
