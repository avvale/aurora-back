import { NotificationDeleteInboxByIdCommand, notificationMockInboxData } from '@app/notification/inbox';
import { NotificationDeleteInboxByIdCommandHandler } from '@app/notification/inbox/application/delete/notification-delete-inbox-by-id.command-handler';
import { NotificationDeleteInboxByIdService } from '@app/notification/inbox/application/delete/notification-delete-inbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxByIdCommandHandler', () =>
{
    let commandHandler: NotificationDeleteInboxByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteInboxByIdCommandHandler,
                {
                    provide : NotificationDeleteInboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteInboxByIdCommandHandler>(NotificationDeleteInboxByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the NotificationDeleteInboxByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteInboxByIdCommand(
                    notificationMockInboxData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
