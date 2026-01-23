/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { SearchEngineIndexCollectionHandler } from '../handlers/search-engine-index-collection.handler';
import { SearchEngineIndexCollectionResolver } from './search-engine-index-collection.resolver';

describe('SearchEngineIndexCollectionResolver', () => {
  let resolver: SearchEngineIndexCollectionResolver;
  let handler: SearchEngineIndexCollectionHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        SearchEngineIndexCollectionResolver,
        {
          provide: SearchEngineIndexCollectionHandler,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<SearchEngineIndexCollectionResolver>(
      SearchEngineIndexCollectionResolver,
    );
    handler = module.get<SearchEngineIndexCollectionHandler>(
      SearchEngineIndexCollectionHandler,
    );
  });

  test('SearchEngineIndexCollectionResolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('main', () => {
    test('SearchEngineIndexCollectionResolver should be defined', () => {
      expect(resolver).toBeDefined();
    });
  });
});
