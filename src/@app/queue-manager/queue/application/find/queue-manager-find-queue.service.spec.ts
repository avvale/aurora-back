import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { FindQueueService } from './queue-manager-find-queue.service';
import { QueueManagerIQueueRepository } from '../../domain/queue-manager-queue.repository';
import { MockQueueRepository } from '../../infrastructure/mock/mock-queue.repository';

describe('FindQueueService', () =>
{
    let service: FindQueueService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                FindQueueService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(FindQueueService);
        repository = module.get(QueueManagerIQueueRepository);
        mockRepository = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('FindQueueService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find queue', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});