import {
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineGetCollectionsService } from '@app/search-engine/collection/application/get/search-engine-get-collections.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetCollectionsService', () => {
  let service: SearchEngineGetCollectionsService;
  let repository: SearchEngineICollectionRepository;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineGetCollectionsService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineGetCollectionsService);
    repository = module.get(SearchEngineICollectionRepository);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('GetCollectionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get collections', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(
          () =>
            new Promise((resolve) => resolve(mockRepository.collectionSource)),
        );
      expect(await service.main()).toBe(mockRepository.collectionSource);
    });
  });
});
