import { NotificationDeleteInboxSettingByIdCommand, notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingByIdCommandHandler } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-setting-by-id.command-handler';
import { NotificationDeleteInboxSettingByIdService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-setting-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingByIdCommandHandler', () =>
{
    let commandHandler: NotificationDeleteInboxSettingByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteInboxSettingByIdCommandHandler,
                {
                    provide : NotificationDeleteInboxSettingByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteInboxSettingByIdCommandHandler>(NotificationDeleteInboxSettingByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the NotificationDeleteInboxSettingByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteInboxSettingByIdCommand(
                    notificationMockInboxSettingData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
