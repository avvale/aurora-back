import { NotificationINotificationRepository, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationGetNotificationsService } from '@app/notification/notification/application/get/notification-get-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetNotificationsService', () =>
{
    let service: NotificationGetNotificationsService;
    let repository: NotificationINotificationRepository;
    let mockRepository: NotificationMockNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationGetNotificationsService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationGetNotificationsService);
        repository = module.get(NotificationINotificationRepository);
        mockRepository = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('GetNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get notifications', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
