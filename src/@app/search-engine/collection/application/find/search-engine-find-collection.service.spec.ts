import {
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineFindCollectionService } from '@app/search-engine/collection/application/find/search-engine-find-collection.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionService', () => {
  let service: SearchEngineFindCollectionService;
  let repository: SearchEngineICollectionRepository;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineFindCollectionService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            find: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineFindCollectionService);
    repository = module.get(SearchEngineICollectionRepository);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('SearchEngineFindCollectionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find collection', async () => {
      jest
        .spyOn(repository, 'find')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource[0]);
    });
  });
});
