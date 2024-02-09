import { NotificationDeleteInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingsCommandHandler } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-settings.command-handler';
import { NotificationDeleteInboxSettingsService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingsCommandHandler', () =>
{
    let commandHandler: NotificationDeleteInboxSettingsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteInboxSettingsCommandHandler,
                {
                    provide : NotificationDeleteInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteInboxSettingsCommandHandler>(NotificationDeleteInboxSettingsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteInboxSettingsCommand(),
            )).toBe(undefined);
        });
    });
});
