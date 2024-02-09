import { NotificationCreateInboxesCommand, notificationMockInboxData } from '@app/notification/inbox';
import { NotificationCreateInboxesCommandHandler } from '@app/notification/inbox/application/create/notification-create-inboxes.command-handler';
import { NotificationCreateInboxesService } from '@app/notification/inbox/application/create/notification-create-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('notificationCreateInboxesCommandHandler', () =>
{
    let commandHandler: NotificationCreateInboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxesCommandHandler,
                {
                    provide : NotificationCreateInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateInboxesCommandHandler>(NotificationCreateInboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return NotificationMockInboxData created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateInboxesCommand(
                    notificationMockInboxData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
