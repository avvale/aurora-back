import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationRawSQLInboxSettingsService } from '@app/notification/inbox-setting/application/raw-sql/notification-raw-sql-inbox-settings.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationRawSQLInboxSettingsService ', () =>
{
    let service: NotificationRawSQLInboxSettingsService ;
    let repository: NotificationIInboxSettingRepository;
    let mockRepository: NotificationMockInboxSettingRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationRawSQLInboxSettingsService ,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(NotificationRawSQLInboxSettingsService );
        repository      = module.get(NotificationIInboxSettingRepository);
        mockRepository  = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('RawSQLInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get inboxSettings', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
