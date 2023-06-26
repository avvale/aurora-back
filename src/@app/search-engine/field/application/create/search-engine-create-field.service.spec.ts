/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { CreateFieldService } from './create-field.service';
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
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('SearchEngineCreateFieldService', () =>

{
    let service: CreateFieldService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                CreateFieldService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CreateFieldService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(MockFieldRepository);
    });

    describe('main', () =>
    {
        test('CreateFieldService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a field and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new SearchEngineFieldId(fields[0].id),
                    collectionId: new SearchEngineFieldCollectionId(fields[0].collectionId),
                    name: new SearchEngineFieldName(fields[0].name),
                    type: new SearchEngineFieldType(fields[0].type),
                    isNullable: new SearchEngineFieldIsNullable(fields[0].isNullable),
                },
            )).toBe(undefined);
        });
    });
});