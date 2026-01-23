import {
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
  SearchEnginePaginateCollectionsQuery,
} from '@app/search-engine/collection';
import { SearchEnginePaginateCollectionsQueryHandler } from '@app/search-engine/collection/application/paginate/search-engine-paginate-collections.query-handler';
import { SearchEnginePaginateCollectionsService } from '@app/search-engine/collection/application/paginate/search-engine-paginate-collections.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsQueryHandler', () => {
  let queryHandler: SearchEnginePaginateCollectionsQueryHandler;
  let service: SearchEnginePaginateCollectionsService;
  let repository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEnginePaginateCollectionsQueryHandler,
        {
          provide: SearchEngineICollectionRepository,
          useClass: SearchEngineMockCollectionRepository,
        },
        {
          provide: SearchEnginePaginateCollectionsService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<SearchEnginePaginateCollectionsQueryHandler>(
      SearchEnginePaginateCollectionsQueryHandler,
    );
    service = module.get<SearchEnginePaginateCollectionsService>(
      SearchEnginePaginateCollectionsService,
    );
    repository = <SearchEngineMockCollectionRepository>(
      module.get<SearchEngineICollectionRepository>(
        SearchEngineICollectionRepository,
      )
    );
  });

  describe('main', () => {
    test('SearchEnginePaginateCollectionsQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an collections paginated', async () => {
      jest.spyOn(service, 'main').mockImplementation(
        () =>
          new Promise((resolve) =>
            resolve({
              count: 10,
              total: 100,
              rows: repository.collectionSource.slice(0, 10),
            }),
          ),
      );
      expect(
        await queryHandler.execute(
          new SearchEnginePaginateCollectionsQuery({
            offset: 0,
            limit: 10,
          }),
        ),
      ).toStrictEqual(
        new PaginationResponse(
          100,
          10,
          repository.collectionSource.slice(0, 10).map((item) => item.toDTO()),
        ),
      );
    });
  });
});
