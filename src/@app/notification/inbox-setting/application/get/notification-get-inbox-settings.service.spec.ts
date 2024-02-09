import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationGetInboxSettingsService } from '@app/notification/inbox-setting/application/get/notification-get-inbox-settings.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxSettingsService', () =>
{
    let service: NotificationGetInboxSettingsService;
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
                NotificationGetInboxSettingsService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationGetInboxSettingsService);
        repository = module.get(NotificationIInboxSettingRepository);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('GetInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get inboxSettings', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
