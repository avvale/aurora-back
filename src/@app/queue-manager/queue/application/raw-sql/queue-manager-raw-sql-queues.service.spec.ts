import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { RawSQLQueuesService } from './raw-sql-queues.service';
import { QueueManagerIQueueRepository } from '../../domain/queue-manager-queue.repository';
import { MockQueueRepository } from '../../infrastructure/mock/mock-queue.repository';

describe('RawSQLQueuesService', () =>
{
    let service: RawSQLQueuesService;
    let repository: QueueManagerIQueueRepository;
    let mockRepository: MockQueueRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                RawSQLQueuesService,
                MockQueueRepository,
                {
                    provide : QueueManagerIQueueRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(RawSQLQueuesService);
        repository      = module.get(QueueManagerIQueueRepository);
        mockRepository  = module.get(MockQueueRepository);
    });

    describe('main', () =>
    {
        test('RawSQLQueuesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get queues', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});