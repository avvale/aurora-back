import { NotificationIInboxSettingRepository, NotificationInboxSettingMapper, NotificationMockInboxSettingRepository, NotificationRawSQLInboxSettingsQuery } from '@app/notification/inbox-setting';
import { NotificationRawSQLInboxSettingsQueryHandler } from '@app/notification/inbox-setting/application/raw-sql/notification-raw-sql-inbox-settings.query-handler';
import { NotificationRawSQLInboxSettingsService } from '@app/notification/inbox-setting/application/raw-sql/notification-raw-sql-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLInboxSettingsQueryHandler', () =>
{
    let queryHandler: NotificationRawSQLInboxSettingsQueryHandler;
    let service: NotificationRawSQLInboxSettingsService;
    let repository: NotificationMockInboxSettingRepository;
    let mapper: NotificationInboxSettingMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationRawSQLInboxSettingsQueryHandler,
                {
                    provide : NotificationIInboxSettingRepository,
                    useClass: NotificationMockInboxSettingRepository,
                },
                {
                    provide : NotificationRawSQLInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationRawSQLInboxSettingsQueryHandler>(NotificationRawSQLInboxSettingsQueryHandler);
        service = module.get<NotificationRawSQLInboxSettingsService>(NotificationRawSQLInboxSettingsService);
        repository = <NotificationMockInboxSettingRepository>module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
        mapper = new NotificationInboxSettingMapper();
    });

    describe('main', () =>
    {
        test('NotificationRawSQLInboxSettingsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxSettings founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationRawSQLInboxSettingsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
