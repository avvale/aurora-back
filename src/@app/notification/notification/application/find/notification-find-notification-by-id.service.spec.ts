import { NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationFindNotificationByIdService } from '@app/notification/notification/application/find/notification-find-notification-by-id.service';
import { NotificationNotificationId } from '@app/notification/notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationByIdService', () =>
{
    let service: NotificationFindNotificationByIdService;
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
                NotificationFindNotificationByIdService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindNotificationByIdService);
        repository = module.get(NotificationINotificationRepository);
        mockRepository = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('FindNotificationByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find notification by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new NotificationNotificationId(notificationMockNotificationData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
