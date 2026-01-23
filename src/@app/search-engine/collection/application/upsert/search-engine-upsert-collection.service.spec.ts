/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineICollectionRepository,
  searchEngineMockCollectionData,
  SearchEngineMockCollectionRepository,
} from '@app/search-engine/collection';
import { SearchEngineUpsertCollectionService } from '@app/search-engine/collection/application/upsert/search-engine-upsert-collection.service';
import {
  SearchEngineCollectionAlias,
  SearchEngineCollectionDefaultSortingField,
  SearchEngineCollectionDocumentsNumber,
  SearchEngineCollectionId,
  SearchEngineCollectionIsEnableNestedFields,
  SearchEngineCollectionName,
  SearchEngineCollectionNumMemoryShards,
  SearchEngineCollectionStatus,
  SearchEngineCollectionTimestampCreatedAt,
} from '@app/search-engine/collection/domain/value-objects';
import {
  CommandBus,
  EventBus,
  EventPublisher,
  UnhandledExceptionBus,
} from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionService', () => {
  let service: SearchEngineUpsertCollectionService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineUpsertCollectionService,
        SearchEngineMockCollectionRepository,
        {
          provide: SearchEngineICollectionRepository,
          useValue: {
            upsert: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineUpsertCollectionService);
  });

  describe('main', () => {
    test('SearchEngineUpsertCollectionService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should upsert a collection and emit event', async () => {
      expect(
        await service.main({
          id: new SearchEngineCollectionId(
            searchEngineMockCollectionData[0].id,
          ),
          name: new SearchEngineCollectionName(
            searchEngineMockCollectionData[0].name,
          ),
          alias: new SearchEngineCollectionAlias(
            searchEngineMockCollectionData[0].alias,
          ),
          status: new SearchEngineCollectionStatus(
            searchEngineMockCollectionData[0].status,
          ),
          documentsNumber: new SearchEngineCollectionDocumentsNumber(
            searchEngineMockCollectionData[0].documentsNumber,
          ),
          defaultSortingField: new SearchEngineCollectionDefaultSortingField(
            searchEngineMockCollectionData[0].defaultSortingField,
          ),
          numMemoryShards: new SearchEngineCollectionNumMemoryShards(
            searchEngineMockCollectionData[0].numMemoryShards,
          ),
          timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(
            searchEngineMockCollectionData[0].timestampCreatedAt,
          ),
          isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(
            searchEngineMockCollectionData[0].isEnableNestedFields,
          ),
        }),
      ).toBe(undefined);
    });
  });
});
