/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineDeleteFieldByIdService } from './search-engine-delete-field-by-id.service';
import { SearchEngineFieldId } from '../../domain/value-objects';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('SearchEngineDeleteFieldByIdService', () =>
{
    let service: SearchEngineDeleteFieldByIdService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteFieldByIdService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteFieldByIdService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(MockFieldRepository);
    });

    describe('main', () =>
    {
        test('DeleteFieldByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete field and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new FieldId(fields[0].id),
            )).toBe(undefined);
        });
    });
});