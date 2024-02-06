import { NotificationDeleteOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationDeleteOutBoxNotificationsCommandHandler } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notifications.command-handler';
import { NotificationDeleteOutBoxNotificationsService } from '@app/notification/out-box-notification/application/delete/notification-delete-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationDeleteOutBoxNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteOutBoxNotificationsCommandHandler,
                {
                    provide : NotificationDeleteOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteOutBoxNotificationsCommandHandler>(NotificationDeleteOutBoxNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteOutBoxNotificationsCommand(),
            )).toBe(undefined);
        });
    });
});
