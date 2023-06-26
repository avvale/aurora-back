/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { QueueManagerUpdateQueueByIdService } from './queue-manager-update-queue-by-id.service';
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

describe('QueueManagerUpdateQueueByIdService', () =>
{
    let service: QueueManagerUpdateQueueByIdService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpdateQueueByIdService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpdateQueueByIdService);
        repository = module.get(QueueManagerIQueueRepository);
        mockRepository = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('UpdateQueueByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a queue and emit event', async () =>
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