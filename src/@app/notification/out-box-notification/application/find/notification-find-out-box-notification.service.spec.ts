import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationService', () =>
{
    let service: NotificationFindOutBoxNotificationService;
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
                NotificationFindOutBoxNotificationService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindOutBoxNotificationService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find outBoxNotification', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
