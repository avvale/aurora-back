/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationINotificationRepository, NotificationMockNotificationRepository } from '@app/notification/notification';
import { NotificationDeleteNotificationsService } from '@app/notification/notification/application/delete/notification-delete-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationsService', () =>
{
    let service: NotificationDeleteNotificationsService;
    let repository: NotificationINotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteNotificationsService,
                NotificationMockNotificationRepository,
                {
                    provide : NotificationINotificationRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteNotificationsService);
        repository = module.get(NotificationINotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete notification and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
