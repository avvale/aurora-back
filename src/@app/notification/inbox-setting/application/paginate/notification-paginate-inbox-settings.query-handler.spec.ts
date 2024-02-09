import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository, NotificationPaginateInboxSettingsQuery } from '@app/notification/inbox-setting';
import { NotificationPaginateInboxSettingsQueryHandler } from '@app/notification/inbox-setting/application/paginate/notification-paginate-inbox-settings.query-handler';
import { NotificationPaginateInboxSettingsService } from '@app/notification/inbox-setting/application/paginate/notification-paginate-inbox-settings.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxSettingsQueryHandler', () =>
{
    let queryHandler: NotificationPaginateInboxSettingsQueryHandler;
    let service: NotificationPaginateInboxSettingsService;
    let repository: NotificationMockInboxSettingRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationPaginateInboxSettingsQueryHandler,
                {
                    provide : NotificationIInboxSettingRepository,
                    useClass: NotificationMockInboxSettingRepository,
                },
                {
                    provide : NotificationPaginateInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationPaginateInboxSettingsQueryHandler>(NotificationPaginateInboxSettingsQueryHandler);
        service = module.get<NotificationPaginateInboxSettingsService>(NotificationPaginateInboxSettingsService);
        repository = <NotificationMockInboxSettingRepository>module.get<NotificationIInboxSettingRepository>(NotificationIInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxSettingsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxSettings paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new NotificationPaginateInboxSettingsQuery(
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
