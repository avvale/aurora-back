import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindQueueByIdQueryHandler } from './queue-manager-find-queue-by-id.query-handler';
import { MockQueueRepository } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.repository';
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { QueueManagerIQueueRepository } from '@app/queue-manager/queue/domain/queue-manager-queue.repository';
import { QueueManagerQueueMapper } from '@app/queue-manager/queue/domain/queue-manager-queue.mapper';
import { QueueManagerFindQueueByIdQuery } from './queue-manager-find-queue-by-id.query';
import { QueueManagerFindQueueByIdService } from './queue-manager-find-queue-by-id.service';

describe('FindQueueByIdQueryHandler', () =>
{
    let queryHandler: QueueManagerFindQueueByIdQueryHandler;
    let service: QueueManagerFindQueueByIdService;
    let repository: MockQueueRepository;
    let mapper: QueueMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindQueueByIdQueryHandler,
                {
                    provide : QueueManagerIQueueRepository,
                    useClass: MockQueueRepository,
                },
                {
                    provide : FindQueueByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindQueueByIdQueryHandler>(FindQueueByIdQueryHandler);
        service = module.get<FindQueueByIdService>(FindQueueByIdService);
        repository = <MockQueueRepository>module.get<QueueManagerIQueueRepository>(QueueManagerIQueueRepository);
        mapper = new QueueMapper();
    });

    describe('main', () =>
    {
        test('FindQueueByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an queue founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindQueueByIdQuery(
                    queues[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});