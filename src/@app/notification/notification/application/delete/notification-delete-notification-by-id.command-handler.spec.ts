import { NotificationDeleteNotificationByIdCommand, notificationMockNotificationData } from '@app/notification/notification';
import { NotificationDeleteNotificationByIdCommandHandler } from '@app/notification/notification/application/delete/notification-delete-notification-by-id.command-handler';
import { NotificationDeleteNotificationByIdService } from '@app/notification/notification/application/delete/notification-delete-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationByIdCommandHandler', () =>
{
    let commandHandler: NotificationDeleteNotificationByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteNotificationByIdCommandHandler,
                {
                    provide : NotificationDeleteNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteNotificationByIdCommandHandler>(NotificationDeleteNotificationByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the NotificationDeleteNotificationByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteNotificationByIdCommand(
                    notificationMockNotificationData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
