import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationFindInboxSettingByIdService } from '@app/notification/inbox-setting/application/find/notification-find-inbox-setting-by-id.service';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingByIdService', () =>
{
    let service: NotificationFindInboxSettingByIdService;
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
                NotificationFindInboxSettingByIdService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindInboxSettingByIdService);
        repository = module.get(NotificationIInboxSettingRepository);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('FindInboxSettingByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find inboxSetting by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new NotificationInboxSettingId(notificationMockInboxSettingData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
