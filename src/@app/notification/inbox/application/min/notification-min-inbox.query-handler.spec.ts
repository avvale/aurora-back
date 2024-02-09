import { NotificationMinInboxQuery, NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationMinInboxQueryHandler } from '@app/notification/inbox/application/min/notification-min-inbox.query-handler';
import { NotificationMinInboxService } from '@app/notification/inbox/application/min/notification-min-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationMinInboxQueryHandler', () =>
{
    let queryHandler: NotificationMinInboxQueryHandler;
    let service: NotificationMinInboxService;
    let repository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationMinInboxQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationMinInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationMinInboxQueryHandler>(NotificationMinInboxQueryHandler);
        service = module.get<NotificationMinInboxService>(NotificationMinInboxService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationMinInboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should min inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.min(column))));
            expect(await queryHandler.execute(
                new NotificationMinInboxQuery('id'),
            )).toStrictEqual(repository.min('id'));
        });
    });
});
