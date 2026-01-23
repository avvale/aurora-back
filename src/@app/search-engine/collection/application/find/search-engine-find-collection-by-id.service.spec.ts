import {
  SearchEngineICollectionRepository,
  searchEngineMockCollectionData,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineFindCollectionByIdService } from '@app/search-engine/collection/application/find/search-engine-find-collection-by-id.service';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionByIdService', () => {
  let service: SearchEngineFindCollectionByIdService;
  let repository: SearchEngineICollectionRepository;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineFindCollectionByIdService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineFindCollectionByIdService);
    repository = module.get(SearchEngineICollectionRepository);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('FindCollectionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should find collection by id', async () => {
      jest
        .spyOn(repository, 'findById')
        .mockImplementation(
          () =>
            new Promise((resolve) =>
              resolve(mockRepository.collectionSource[0]),
            ),
        );
      expect(
        await service.main(
          new SearchEngineCollectionId(searchEngineMockCollectionData[0].id),
        ),
      ).toBe(mockRepository.collectionSource[0]);
    });
  });
});
