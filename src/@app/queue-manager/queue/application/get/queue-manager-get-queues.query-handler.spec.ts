import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { GetQueuesQueryHandler } from './get-queues.query-handler';
import { MockQueueRepository } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.repository';
import { QueueManagerIQueueRepository } from '@app/queue-manager/queue/domain/queue-manager-queue.repository';
import { QueueManagerQueueMapper } from '@app/queue-manager/queue/domain/queue-manager-queue.mapper';
import { GetQueuesQuery } from './get-queues.query';
import { GetQueuesService } from './get-queues.service';

describe('GetQueuesQueryHandler', () =>
{
    let queryHandler: GetQueuesQueryHandler;
    let service: GetQueuesService;
    let repository: MockQueueRepository;
    let mapper: QueueMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetQueuesQueryHandler,
                {
                    provide : QueueManagerIQueueRepository,
                    useClass: MockQueueRepository,
                },
                {
                    provide : GetQueuesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<GetQueuesQueryHandler>(GetQueuesQueryHandler);
        service = module.get<GetQueuesService>(GetQueuesService);
        repository = <MockQueueRepository>module.get<QueueManagerIQueueRepository>(QueueManagerIQueueRepository);
        mapper = new QueueMapper();
    });

    describe('main', () =>
    {
        test('GetQueuesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an queues founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new GetQueuesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});