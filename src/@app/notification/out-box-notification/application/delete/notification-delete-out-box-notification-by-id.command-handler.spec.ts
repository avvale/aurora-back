import { NotificationDeleteOutBoxNotificationByIdCommand, notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationByIdCommandHandler } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notification-by-id.command-handler';
import { NotificationDeleteOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationByIdCommandHandler', () =>
{
    let commandHandler: NotificationDeleteOutBoxNotificationByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteOutBoxNotificationByIdCommandHandler,
                {
                    provide : NotificationDeleteOutBoxNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteOutBoxNotificationByIdCommandHandler>(NotificationDeleteOutBoxNotificationByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the NotificationDeleteOutBoxNotificationByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteOutBoxNotificationByIdCommand(
                    notificationMockOutBoxNotificationData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
