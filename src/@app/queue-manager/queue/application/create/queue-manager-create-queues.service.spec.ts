/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { CreateQueuesService } from './create-queues.service';
import { QueueManagerIQueueRepository } from '../../domain/queue-manager-queue.repository';
import { MockQueueRepository } from '../../infrastructure/mock/mock-queue.repository';

describe('CreateQueuesService', () =>
{
    let service: CreateQueuesService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                CreateQueuesService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CreateQueuesService);
        repository = module.get(QueueManagerIQueueRepository);
        mockRepository = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('CreateQueuesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create queues and emit event', async () =>
        {
            expect(await service.main(
                mockRepository.collectionSource,
            )).toBe(undefined);
        });
    });
});