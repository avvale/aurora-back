/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineIFieldRepository, searchEngineMockFieldData, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineCreateFieldService } from '@app/search-engine/field/application/create/search-engine-create-field.service';
import {
    SearchEngineFieldCollectionId,
    SearchEngineFieldId,
    SearchEngineFieldIsNullable,
    SearchEngineFieldName,
    SearchEngineFieldType,
} from '@app/search-engine/field/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

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
