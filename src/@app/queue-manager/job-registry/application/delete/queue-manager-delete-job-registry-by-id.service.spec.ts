/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { QueueManagerDeleteJobRegistryByIdService } from './queue-manager-delete-job-registry-by-id.service';
import { QueueManagerJobRegistryId } from '../../domain/value-objects';
import { QueueManagerIJobRegistryRepository } from '../../domain/queue-manager-job-registry.repository';
import { MockJobRegistryRepository } from '../../infrastructure/mock/mock-job-registry.repository';

describe('QueueManagerDeleteJobRegistryByIdService', () =>
{
    let service: QueueManagerDeleteJobRegistryByIdService;
    let repository: QueueManagerIJobRegistryRepository;
    let mockRepository: MockJobRegistryRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteJobRegistryByIdService,
                MockJobRegistryRepository,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteJobRegistryByIdService);
        repository = module.get(QueueManagerIJobRegistryRepository);
        mockRepository = module.get(MockJobRegistryRepository);
    });

    describe('main', () =>
    {
        test('DeleteJobRegistryByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete jobRegistry and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new JobRegistryId(jobsRegistry[0].id),
            )).toBe(undefined);
        });
    });
});