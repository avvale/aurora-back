/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { CreateJobRegistryService } from './create-job-registry.service';
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

describe('QueueManagerCreateJobRegistryService', () =>

{
    let service: CreateJobRegistryService;
    let repository: QueueManagerIJobRegistryRepository;
    let mockRepository: MockJobRegistryRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                CreateJobRegistryService,
                MockJobRegistryRepository,
                {
                    provide : QueueManagerIJobRegistryRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CreateJobRegistryService);
        repository = module.get(QueueManagerIJobRegistryRepository);
        mockRepository = module.get(MockJobRegistryRepository);
    });

    describe('main', () =>
    {
        test('CreateJobRegistryService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a jobRegistry and emit event', async () =>
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