/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineCreateFieldService } from './search-engine-create-field.service';
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

describe('SearchEngineCreateFieldService', () =>

{
    let service: SearchEngineCreateFieldService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineCreateFieldService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineCreateFieldService);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a field and emit event', async () =>
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
                ),
            )
                .toBe(undefined);
        });
    });
});
