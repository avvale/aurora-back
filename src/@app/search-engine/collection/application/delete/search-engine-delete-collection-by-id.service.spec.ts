/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineICollectionRepository,
  searchEngineMockCollectionData,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionByIdService } from '@app/search-engine/collection/application/delete/search-engine-delete-collection-by-id.service';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdService', () => {
  let service: SearchEngineDeleteCollectionByIdService;
  let repository: SearchEngineICollectionRepository;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineDeleteCollectionByIdService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            deleteById: (id) => {
              /**/
            },
            findById: (id) => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineDeleteCollectionByIdService);
    repository = module.get(SearchEngineICollectionRepository);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('SearchEngineDeleteCollectionByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete collection and emit event', async () => {
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
          {},
        ),
      ).toBe(undefined);
    });
  });
});
