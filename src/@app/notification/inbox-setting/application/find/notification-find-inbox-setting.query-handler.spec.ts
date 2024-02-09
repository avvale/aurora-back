import { NotificationFindInboxSettingQuery, NotificationIInboxSettingRepository, NotificationInboxSettingMapper, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingQueryHandler } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting.query-handler';
import { NotificationFindInboxSettingService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingQueryHandler', () =>
{
    let queryHandler: NotificationFindInboxSettingQueryHandler;
    let service: NotificationFindInboxSettingService;
    let repository: NotificationMockInboxSettingRepository;
    let mapper: NotificationInboxSettingMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindInboxSettingQueryHandler,
                {
                    provide : NotificationIInboxSettingRepository,
                    useClass: NotificationMockInboxSettingRepository,
                },
                {
                    provide : NotificationFindInboxSettingService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindInboxSettingQueryHandler>(NotificationFindInboxSettingQueryHandler);
        service = module.get<NotificationFindInboxSettingService>(NotificationFindInboxSettingService);
        repository = <NotificationMockInboxSettingRepository>module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
        mapper = new NotificationInboxSettingMapper();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxSetting founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindInboxSettingQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
