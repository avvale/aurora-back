/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { DeleteJobsRegistryService } from './delete-jobs-registry.service';
import { QueueManagerIJobRegistryRepository } from '../../domain/queue-manager-job-registry.repository';
import { MockJobRegistryRepository } from '../../infrastructure/mock/mock-job-registry.repository';

describe('QueueManagerDeleteJobsRegistryService', () =>
{
    let service: DeleteJobsRegistryService;
    let repository: QueueManagerIJobRegistryRepository;
    let mockRepository: MockJobRegistryRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteJobsRegistryService,
                MockJobRegistryRepository,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteJobsRegistryService);
        repository = module.get(QueueManagerIJobRegistryRepository);
        mockRepository = module.get(MockJobRegistryRepository);
    });

    describe('main', () =>
    {
        test('DeleteJobsRegistryService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete jobRegistry and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(await service.main()).toBe(undefined);
        });
    });
});