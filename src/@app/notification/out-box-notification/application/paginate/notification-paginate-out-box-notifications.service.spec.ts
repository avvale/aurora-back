import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationPaginateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/paginate/notification-paginate-out-box-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutBoxNotificationsService', () =>
{
    let service: NotificationPaginateOutBoxNotificationsService;
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
                NotificationPaginateOutBoxNotificationsService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationPaginateOutBoxNotificationsService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutBoxNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate outBoxNotifications', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
