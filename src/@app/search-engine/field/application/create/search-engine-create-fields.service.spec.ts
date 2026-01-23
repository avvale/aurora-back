/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineIFieldRepository,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineCreateFieldsService } from '@app/search-engine/field/application/create/search-engine-create-fields.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldsService', () => {
  let service: SearchEngineCreateFieldsService;
  let mockRepository: SearchEngineMockFieldRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineCreateFieldsService,
        SearchEngineMockFieldRepository,
        {
          provide: SearchEngineIFieldRepository,
          useValue: {
            insert: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineCreateFieldsService);
    mockRepository = module.get(SearchEngineMockFieldRepository);
  });

  describe('main', () => {
    test('CreateFieldsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should create fields and emit event', async () => {
      expect(await service.main(mockRepository.collectionSource)).toBe(
        undefined,
      );
    });
  });
});
