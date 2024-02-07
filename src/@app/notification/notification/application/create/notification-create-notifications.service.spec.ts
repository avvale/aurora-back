/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationINotificationRepository, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationCreateNotificationsService } from '@app/notification/notification/application/create/notification-create-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationsService', () =>
{
    let service: NotificationCreateNotificationsService;
    let mockRepository: NotificationMockNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateNotificationsService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateNotificationsService);
        mockRepository = module.get(NotificationMockNotificationRepository);
    });

    describe('main', () =>
    {
        test('CreateNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create notifications and emit event', async () =>
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
