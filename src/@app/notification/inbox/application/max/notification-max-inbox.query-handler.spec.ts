import { NotificationIInboxRepository, NotificationMaxInboxQuery, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationMaxInboxQueryHandler } from '@app/notification/inbox/application/max/notification-max-inbox.query-handler';
import { NotificationMaxInboxService } from '@app/notification/inbox/application/max/notification-max-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationMaxInboxQueryHandler', () =>
{
    let queryHandler: NotificationMaxInboxQueryHandler;
    let service: NotificationMaxInboxService;
    let repository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationMaxInboxQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationMaxInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationMaxInboxQueryHandler>(NotificationMaxInboxQueryHandler);
        service = module.get<NotificationMaxInboxService>(NotificationMaxInboxService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationMaxInboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should max inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.max(column))));
            expect(await queryHandler.execute(
                new NotificationMaxInboxQuery('id'),
            )).toStrictEqual(repository.max('id'));
        });
    });
});
