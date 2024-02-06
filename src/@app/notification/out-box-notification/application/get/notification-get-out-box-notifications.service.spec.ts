import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationGetOutBoxNotificationsService } from '@app/notification/out-box-notification/application/get/notification-get-out-box-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutBoxNotificationsService', () =>
{
    let service: NotificationGetOutBoxNotificationsService;
    let repository: NotificationIOutBoxNotificationRepository;
    let mockRepository: NotificationMockOutBoxNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationGetOutBoxNotificationsService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationGetOutBoxNotificationsService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('GetOutBoxNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get outBoxNotifications', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
