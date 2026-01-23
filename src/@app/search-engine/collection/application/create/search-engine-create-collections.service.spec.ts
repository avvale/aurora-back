/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineICollectionRepository,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineCreateCollectionsService } from '@app/search-engine/collection/application/create/search-engine-create-collections.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionsService', () => {
  let service: SearchEngineCreateCollectionsService;
  let mockRepository: SearchEngineMockCollectionRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineCreateCollectionsService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            insert: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineCreateCollectionsService);
    mockRepository = module.get(SearchEngineMockCollectionRepository);
  });

  describe('main', () => {
    test('CreateCollectionsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create collections and emit event', async () => {
      expect(await service.main(mockRepository.collectionSource)).toBe(
        undefined,
      );
    });
  });
});
