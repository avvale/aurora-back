/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SearchEngineIFieldRepository,
  searchEngineMockFieldData,
  SearchEngineMockFieldRepository,
} from '@app/search-engine/field';
import { SearchEngineUpdateFieldByIdService } from '@app/search-engine/field/application/update/search-engine-update-field-by-id.service';
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

describe('SearchEngineUpdateFieldByIdService', () => {
  let service: SearchEngineUpdateFieldByIdService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommandBus,
        EventBus,
        EventPublisher,
        UnhandledExceptionBus,
        SearchEngineUpdateFieldByIdService,
        SearchEngineMockFieldRepository,
        {
          provide: SearchEngineIFieldRepository,
          useValue: {
            updateById: () => {
              /**/
            },
          },
        },
      ],
    }).compile();

    service = module.get(SearchEngineUpdateFieldByIdService);
  });

  describe('main', () => {
    test('SearchEngineUpdateFieldByIdService should be defined', () => {
      expect(service).toBeDefined();
    });

    test('should update a field and emit event', async () => {
      expect(
        await service.main(
          {
            id: new SearchEngineFieldId(searchEngineMockFieldData[0].id),
            collectionId: new SearchEngineFieldCollectionId(
              searchEngineMockFieldData[0].collectionId,
            ),
            name: new SearchEngineFieldName(searchEngineMockFieldData[0].name),
            type: new SearchEngineFieldType(searchEngineMockFieldData[0].type),
            isNullable: new SearchEngineFieldIsNullable(
              searchEngineMockFieldData[0].isNullable,
            ),
          },
          {},
        ),
      ).toBe(undefined);
    });
  });
});
