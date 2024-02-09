import { NotificationFindInboxSettingByIdQuery, NotificationIInboxSettingRepository, NotificationInboxSettingMapper, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingByIdQueryHandler } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting-by-id.query-handler';
import { NotificationFindInboxSettingByIdService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingByIdQueryHandler', () =>
{
    let queryHandler: NotificationFindInboxSettingByIdQueryHandler;
    let service: NotificationFindInboxSettingByIdService;
    let repository: NotificationMockInboxSettingRepository;
    let mapper: NotificationInboxSettingMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindInboxSettingByIdQueryHandler,
                {
                    provide : NotificationIInboxSettingRepository,
                    useClass: NotificationMockInboxSettingRepository,
                },
                {
                    provide : NotificationFindInboxSettingByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindInboxSettingByIdQueryHandler>(NotificationFindInboxSettingByIdQueryHandler);
        service = module.get<NotificationFindInboxSettingByIdService>(NotificationFindInboxSettingByIdService);
        repository = <NotificationMockInboxSettingRepository>module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
        mapper = new NotificationInboxSettingMapper();
    });

    describe('main', () =>
    {
        test('FindInboxSettingByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxSetting founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindInboxSettingByIdQuery(
                    notificationMockInboxSettingData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
