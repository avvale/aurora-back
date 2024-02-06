import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationRawSQLOutBoxNotificationsService } from '@app/notification/out-box-notification/application/raw-sql/notification-raw-sql-out-box-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationRawSQLOutBoxNotificationsService ', () =>
{
    let service: NotificationRawSQLOutBoxNotificationsService ;
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
                NotificationRawSQLOutBoxNotificationsService ,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(NotificationRawSQLOutBoxNotificationsService );
        repository      = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository  = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('RawSQLOutBoxNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get outBoxNotifications', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
