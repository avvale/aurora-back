import { NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification-by-id.service';
import { NotificationOutBoxNotificationId } from '@app/notification/out-box-notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationByIdService', () =>
{
    let service: NotificationFindOutBoxNotificationByIdService;
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
                NotificationFindOutBoxNotificationByIdService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindOutBoxNotificationByIdService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('FindOutBoxNotificationByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find outBoxNotification by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new NotificationOutBoxNotificationId(notificationMockOutBoxNotificationData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
