/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineIFieldRepository,
  searchEngineMockFieldData,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineUpsertFieldService } from '@app/search-engine/field/application/upsert/search-engine-upsert-field.service';
import {
  SearchEngineFieldCollectionId,
  SearchEngineFieldId,
  SearchEngineFieldIsNullable,
  SearchEngineFieldName,
  SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertFieldService', () => {
  let service: SearchEngineUpsertFieldService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineUpsertFieldService,
        SearchEngineMockFieldRepository,
        {
          provide: SearchEngineIFieldRepository,
          useValue: {
            upsert: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineUpsertFieldService);
  });

  describe('main', () => {
    test('SearchEngineUpsertFieldService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should upsert a field and emit event', async () => {
      expect(
        await service.main({
          id: new SearchEngineFieldId(searchEngineMockFieldData[0].id),
          collectionId: new SearchEngineFieldCollectionId(
            searchEngineMockFieldData[0].collectionId,
          ),
          name: new SearchEngineFieldName(searchEngineMockFieldData[0].name),
          type: new SearchEngineFieldType(searchEngineMockFieldData[0].type),
          isNullable: new SearchEngineFieldIsNullable(
            searchEngineMockFieldData[0].isNullable,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
