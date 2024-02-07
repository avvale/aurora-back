import { NotificationINotificationRepository, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationFindNotificationService } from '@app/notification/notification/application/find/notification-find-notification.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationService', () =>
{
    let service: NotificationFindNotificationService;
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
                NotificationFindNotificationService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindNotificationService);
        repository = module.get(NotificationINotificationRepository);
        mockRepository = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find notification', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
