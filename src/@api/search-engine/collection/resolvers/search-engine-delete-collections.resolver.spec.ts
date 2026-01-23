/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineDeleteCollectionsHandler,
  SearchEngineDeleteCollectionsResolver,
} from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionsResolver', () => {
  let resolver: SearchEngineDeleteCollectionsResolver;
  let handler: SearchEngineDeleteCollectionsHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineDeleteCollectionsResolver,
        {
          provide: SearchEngineDeleteCollectionsHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineDeleteCollectionsResolver>(
      SearchEngineDeleteCollectionsResolver,
    );
    handler = module.get<SearchEngineDeleteCollectionsHandler>(
      SearchEngineDeleteCollectionsHandler,
    );
  });

  test('SearchEngineDeleteCollectionsResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionsResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });

    test('should return an searchEngineMockCollectionData deleted', async () => {
      jest
        .spyOn(handler, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(searchEngineMockCollectionData)),
        );
      expect(await resolver.main()).toBe(searchEngineMockCollectionData);
    });
  });
});
