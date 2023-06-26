/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { QueueManagerUpdateQueuesService } from './queue-manager-update-queues.service';
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

describe('UpdateQueuesService', () =>
{
    let service: UpdateQueuesService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpdateQueuesService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpdateQueuesService);
        repository = module.get(QueueManagerIQueueRepository);
        mockRepository = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('UpdateQueuesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a queues and emit event', async () =>
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