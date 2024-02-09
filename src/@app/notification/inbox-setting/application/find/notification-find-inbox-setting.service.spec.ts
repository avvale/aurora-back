import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingService', () =>
{
    let service: NotificationFindInboxSettingService;
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
                NotificationFindInboxSettingService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindInboxSettingService);
        repository = module.get(NotificationIInboxSettingRepository);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find inboxSetting', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
