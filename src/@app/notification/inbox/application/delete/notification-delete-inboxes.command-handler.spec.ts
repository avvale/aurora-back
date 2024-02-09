import { NotificationDeleteInboxesCommand } from '@app/notification/inbox';
import { NotificationDeleteInboxesCommandHandler } from '@app/notification/inbox/application/delete/notification-delete-inboxes.command-handler';
import { NotificationDeleteInboxesService } from '@app/notification/inbox/application/delete/notification-delete-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxesCommandHandler', () =>
{
    let commandHandler: NotificationDeleteInboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteInboxesCommandHandler,
                {
                    provide : NotificationDeleteInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteInboxesCommandHandler>(NotificationDeleteInboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteInboxesCommand(),
            )).toBe(undefined);
        });
    });
});
