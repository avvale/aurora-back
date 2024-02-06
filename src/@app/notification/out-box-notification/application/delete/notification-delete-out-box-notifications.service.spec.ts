/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationsService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notifications.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationsService', () =>
{
    let service: NotificationDeleteOutBoxNotificationsService;
    let repository: NotificationIOutBoxNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteOutBoxNotificationsService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteOutBoxNotificationsService);
        repository = module.get(NotificationIOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete outBoxNotification and emit event', async () =>
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
