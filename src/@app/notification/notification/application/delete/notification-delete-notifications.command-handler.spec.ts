import { NotificationDeleteNotificationsCommand } from '@app/notification/notification';
import { NotificationDeleteNotificationsCommandHandler } from '@app/notification/notification/application/delete/notification-delete-notifications.command-handler';
import { NotificationDeleteNotificationsService } from '@app/notification/notification/application/delete/notification-delete-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationDeleteNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteNotificationsCommandHandler,
                {
                    provide : NotificationDeleteNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteNotificationsCommandHandler>(NotificationDeleteNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteNotificationsCommand(),
            )).toBe(undefined);
        });
    });
});
