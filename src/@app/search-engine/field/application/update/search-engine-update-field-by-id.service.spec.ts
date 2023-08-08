/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineUpdateFieldByIdService } from './search-engine-update-field-by-id.service';
import {
    SearchEngineFieldId,
    SearchEngineFieldCollectionId,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldIsNullable,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldUpdatedAt,
    SearchEngineFieldDeletedAt,
} from '../../domain/value-objects';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineMockFieldRepository } from '../../infrastructure/mock/search-engine-mock-field.repository';

describe('SearchEngineUpdateFieldByIdService', () =>
{
    let service: SearchEngineUpdateFieldByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineUpdateFieldByIdService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineUpdateFieldByIdService);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a field and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new SearchEngineFieldId(searchEngineMockFieldData[0].id),
                        collectionId: new SearchEngineFieldCollectionId(searchEngineMockFieldData[0].collectionId),
                        name: new SearchEngineFieldName(searchEngineMockFieldData[0].name),
                        type: new SearchEngineFieldType(searchEngineMockFieldData[0].type),
                        isNullable: new SearchEngineFieldIsNullable(searchEngineMockFieldData[0].isNullable),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
