import {
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineRawSQLCollectionsService } from '@app/search-engine/collection/application/raw-sql/search-engine-raw-sql-collections.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineRawSQLCollectionsService ', () => {
  let service: SearchEngineRawSQLCollectionsService;
  let repository: SearchEngineICollectionRepository;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineRawSQLCollectionsService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            rawSQL: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineRawSQLCollectionsService);
    repository = module.get(SearchEngineICollectionRepository);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('RawSQLCollectionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get collections', async () => {
      jest
        .spyOn(repository, 'rawSQL')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
