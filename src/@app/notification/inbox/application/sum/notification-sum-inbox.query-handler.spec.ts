import { NotificationSumInboxQuery, NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationSumInboxQueryHandler } from '@app/notification/inbox/application/sum/notification-sum-inbox.query-handler';
import { NotificationSumInboxService } from '@app/notification/inbox/application/sum/notification-sum-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationSumInboxQueryHandler', () =>
{
    let queryHandler: NotificationSumInboxQueryHandler;
    let service: NotificationSumInboxService;
    let repository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationSumInboxQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationSumInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationSumInboxQueryHandler>(NotificationSumInboxQueryHandler);
        service = module.get<NotificationSumInboxService>(NotificationSumInboxService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationSumInboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should sum inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.sum(column))));
            expect(await queryHandler.execute(
                new NotificationSumInboxQuery('id'),
            )).toStrictEqual(repository.sum('id'));
        });
    });
});
