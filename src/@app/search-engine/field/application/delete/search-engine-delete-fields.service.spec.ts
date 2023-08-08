/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { SearchEngineDeleteFieldsService } from './search-engine-delete-fields.service';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineMockFieldRepository } from '../../infrastructure/mock/search-engine-mock-field.repository';

describe('SearchEngineDeleteFieldsService', () =>
{
    let service: SearchEngineDeleteFieldsService;
    let repository: SearchEngineIFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineDeleteFieldsService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineDeleteFieldsService);
        repository = module.get(SearchEngineIFieldRepository);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete field and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
