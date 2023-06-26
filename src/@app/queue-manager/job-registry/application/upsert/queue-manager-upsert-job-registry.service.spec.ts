/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { QueueManagerUpsertJobRegistryService } from './queue-manager-upsert-job-registry.service';
import {
    QueueManagerJobRegistryId,
    QueueManagerJobRegistryQueueName,
    QueueManagerJobRegistryState,
    QueueManagerJobRegistryJobId,
    QueueManagerJobRegistryJobName,
    QueueManagerJobRegistryTags,
    QueueManagerJobRegistryCreatedAt,
    QueueManagerJobRegistryUpdatedAt,
    QueueManagerJobRegistryDeletedAt,
} from '../../domain/value-objects';
import { QueueManagerIJobRegistryRepository } from '../../domain/queue-manager-job-registry.repository';
import { MockJobRegistryRepository } from '../../infrastructure/mock/mock-job-registry.repository';

describe('UpsertJobRegistryService', () =>

{
    let service: UpsertJobRegistryService;
    let repository: QueueManagerIJobRegistryRepository;
    let mockRepository: MockJobRegistryRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpsertJobRegistryService,
                MockJobRegistryRepository,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpsertJobRegistryService);
        repository = module.get(QueueManagerIJobRegistryRepository);
        mockRepository = module.get(MockJobRegistryRepository);
    });

    describe('main', () =>
    {
        test('UpsertJobRegistryService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a jobRegistry and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new QueueManagerJobRegistryId(jobsRegistry[0].id),
                    queueName: new QueueManagerJobRegistryQueueName(jobsRegistry[0].queueName),
                    state: new QueueManagerJobRegistryState(jobsRegistry[0].state),
                    jobId: new QueueManagerJobRegistryJobId(jobsRegistry[0].jobId),
                    jobName: new QueueManagerJobRegistryJobName(jobsRegistry[0].jobName),
                    tags: new QueueManagerJobRegistryTags(jobsRegistry[0].tags),
                },
            )).toBe(undefined);
        });
    });
});