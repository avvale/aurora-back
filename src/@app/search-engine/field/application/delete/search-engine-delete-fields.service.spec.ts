/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineIFieldRepository,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineDeleteFieldsService } from '@app/search-engine/field/application/delete/search-engine-delete-fields.service';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsService', () => {
  let service: SearchEngineDeleteFieldsService;
  let repository: SearchEngineIFieldRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineDeleteFieldsService,
        SearchEngineMockFieldRepository,
        {
          provide: SearchEngineIFieldRepository,
          useValue: {
            get: () => {
              /**/
            },
            delete: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineDeleteFieldsService);
    repository = module.get(SearchEngineIFieldRepository);
  });

  describe('main', () => {
    test('SearchEngineDeleteFieldsService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should delete field and emit event', async () => {
      jest
        .spyOn(repository, 'get')
        .mockImplementation(() => new Promise((resolve) => resolve([])));
      expect(await service.main({}, {})).toBe(undefined);
    });
  });
});
