/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineIFieldRepository, searchEngineMockFieldData, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineDeleteFieldByIdService } from '@app/search-engine/field/application/delete/search-engine-delete-field-by-id.service';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdService', () =>
{
    let service: SearchEngineDeleteFieldByIdService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: SearchEngineMockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineDeleteFieldByIdService,
                SearchEngineMockFieldRepository,
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

        service = module.get(SearchEngineDeleteFieldByIdService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete field and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new SearchEngineFieldId(searchEngineMockFieldData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
