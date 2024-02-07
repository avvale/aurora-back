import { NotificationINotificationRepository, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationRawSQLNotificationsService } from '@app/notification/notification/application/raw-sql/notification-raw-sql-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationRawSQLNotificationsService ', () =>
{
    let service: NotificationRawSQLNotificationsService ;
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
                NotificationRawSQLNotificationsService ,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(NotificationRawSQLNotificationsService );
        repository      = module.get(NotificationINotificationRepository);
        mockRepository  = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('RawSQLNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get notifications', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
