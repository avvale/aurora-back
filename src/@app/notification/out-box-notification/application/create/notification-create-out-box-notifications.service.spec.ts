/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/create/notification-create-out-box-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationsService', () =>
{
    let service: NotificationCreateOutBoxNotificationsService;
    let mockRepository: NotificationMockOutBoxNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateOutBoxNotificationsService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateOutBoxNotificationsService);
        mockRepository = module.get(NotificationMockOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('CreateOutBoxNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create outBoxNotifications and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
