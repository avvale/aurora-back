import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { QueueManagerPaginateQueuesQueryHandler } from './queue-manager-paginate-queues.query-handler';
import { MockQueueRepository } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.repository';
import { QueueManagerIQueueRepository } from '@app/queue-manager/queue/domain/queue-manager-queue.repository';
import { QueueManagerQueueMapper } from '@app/queue-manager/queue/domain/queue-manager-queue.mapper';
import { QueueManagerPaginateQueuesQuery } from './queue-manager-paginate-queues.query';
import { QueueManagerPaginateQueuesService } from './queue-manager-paginate-queues.service';

describe('PaginateQueuesQueryHandler', () =>
{
    let queryHandler: PaginateQueuesQueryHandler;
    let service: PaginateQueuesService;
    let repository: MockQueueRepository;
    let mapper: QueueMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PaginateQueuesQueryHandler,
                {
                    provide : QueueManagerIQueueRepository,
                    useClass: MockQueueRepository,
                },
                {
                    provide : PaginateQueuesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<PaginateQueuesQueryHandler>(PaginateQueuesQueryHandler);
        service = module.get<PaginateQueuesService>(PaginateQueuesService);
        repository = <MockQueueRepository>module.get<QueueManagerIQueueRepository>(QueueManagerIQueueRepository);
        mapper = new QueueMapper();
    });

    describe('main', () =>
    {
        test('PaginateQueuesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an queues paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new PaginateQueuesQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});