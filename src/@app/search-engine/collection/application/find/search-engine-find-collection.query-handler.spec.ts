import {
  SearchEngineCollectionMapper,
  SearchEngineFindCollectionQuery,
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineFindCollectionQueryHandler } from '@app/search-engine/collection/application/find/search-engine-find-collection.query-handler';
import { SearchEngineFindCollectionService } from '@app/search-engine/collection/application/find/search-engine-find-collection.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionQueryHandler', () => {
  let queryHandler: SearchEngineFindCollectionQueryHandler;
  let service: SearchEngineFindCollectionService;
  let repository: SearchEngineMockCollectionRepository;
  let mapper: SearchEngineCollectionMapper;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchEngineFindCollectionQueryHandler,
        {
          provide: SearchEngineICollectionRepository,
          useClass: SearchEngineMockCollectionRepository,
        },
        {
          provide: SearchEngineFindCollectionService,
          useValue: {
            main: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    queryHandler = module.get<SearchEngineFindCollectionQueryHandler>(
      SearchEngineFindCollectionQueryHandler,
    );
    service = module.get<SearchEngineFindCollectionService>(
      SearchEngineFindCollectionService,
    );
    repository = <SearchEngineMockCollectionRepository>(
      module.get<SearchEngineICollectionRepository>(
        SearchEngineICollectionRepository,
      )
    );
    mapper = new SearchEngineCollectionMapper();
  });

  describe('main', () => {
    test('SearchEngineFindCollectionQueryHandler should be defined', () => {
      expect(queryHandler).toBeDefined();
    });

    test('should return an collection founded', async () => {
      jest
        .spyOn(service, 'main')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(repository.collectionSource[0])),
        );
      expect(
        await queryHandler.execute(new SearchEngineFindCollectionQuery()),
      ).toStrictEqual(
        mapper.mapAggregateToResponse(repository.collectionSource[0]),
      );
    });
  });
});
