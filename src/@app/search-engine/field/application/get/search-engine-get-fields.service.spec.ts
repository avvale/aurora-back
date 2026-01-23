import {
  SearchEngineIFieldRepository,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineGetFieldsService } from '@app/search-engine/field/application/get/search-engine-get-fields.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetFieldsService', () => {
  let service: SearchEngineGetFieldsService;
  let repository: SearchEngineIFieldRepository;
  let mockRepository: SearchEngineMockFieldRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineGetFieldsService,
        SearchEngineMockFieldRepository,
        {
          provide: SearchEngineIFieldRepository,
          useValue: {
            get: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineGetFieldsService);
    repository = module.get(SearchEngineIFieldRepository);
    mockRepository = module.get(SearchEngineMockFieldRepository);
  });

  describe('main', () => {
    test('GetFieldsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should get fields', async () => {
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
