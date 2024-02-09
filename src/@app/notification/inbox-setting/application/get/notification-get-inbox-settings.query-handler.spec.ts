import { NotificationGetInboxSettingsQuery, NotificationIInboxSettingRepository, NotificationInboxSettingMapper, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationGetInboxSettingsQueryHandler } from '@app/notification/inbox-setting/application/get/notification-get-inbox-settings.query-handler';
import { NotificationGetInboxSettingsService } from '@app/notification/inbox-setting/application/get/notification-get-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetInboxSettingsQueryHandler', () =>
{
    let queryHandler: NotificationGetInboxSettingsQueryHandler;
    let service: NotificationGetInboxSettingsService;
    let repository: NotificationMockInboxSettingRepository;
    let mapper: NotificationInboxSettingMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationGetInboxSettingsQueryHandler,
                {
                    provide : NotificationIInboxSettingRepository,
                    useClass: NotificationMockInboxSettingRepository,
                },
                {
                    provide : NotificationGetInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationGetInboxSettingsQueryHandler>(NotificationGetInboxSettingsQueryHandler);
        service = module.get<NotificationGetInboxSettingsService>(NotificationGetInboxSettingsService);
        repository = <NotificationMockInboxSettingRepository>module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
        mapper = new NotificationInboxSettingMapper();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxSettingsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxSettings founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationGetInboxSettingsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
