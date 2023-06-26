/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { QueueManagerUpsertQueueService } from './queue-manager-upsert-queue.service';
import {
    QueueManagerQueueId,
    QueueManagerQueuePrefix,
    QueueManagerQueueName,
    QueueManagerQueueCreatedAt,
    QueueManagerQueueUpdatedAt,
    QueueManagerQueueDeletedAt,
} from '../../domain/value-objects';
import { QueueManagerIQueueRepository } from '../../domain/queue-manager-queue.repository';
import { MockQueueRepository } from '../../infrastructure/mock/mock-queue.repository';

describe('UpsertQueueService', () =>

{
    let service: UpsertQueueService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpsertQueueService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpsertQueueService);
        repository = module.get(QueueManagerIQueueRepository);
        mockRepository = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('UpsertQueueService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a queue and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new QueueManagerQueueId(queues[0].id),
                    prefix: new QueueManagerQueuePrefix(queues[0].prefix),
                    name: new QueueManagerQueueName(queues[0].name),
                },
            )).toBe(undefined);
        });
    });
});