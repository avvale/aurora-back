import { NotificationCreateOutboxCommandHandler } from './notification-create-outbox.command-handler';
import { NotificationCreateOutboxService } from './notification-create-outbox.service';
import { NotificationCreateOutboxCommand, notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxCommandHandler', () =>
{
    let commandHandler: NotificationCreateOutboxCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutboxCommandHandler,
                {
                    provide : NotificationCreateOutboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateOutboxCommandHandler>(NotificationCreateOutboxCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateOutboxCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the NotificationCreateOutboxService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateOutboxCommand(
                    {
                        id: notificationMockOutboxData[0].id,
                        notificationId: notificationMockOutboxData[0].notificationId,
                        sort: notificationMockOutboxData[0].sort,
                        accountRecipientIds: notificationMockOutboxData[0].accountRecipientIds,
                        tenantRecipientIds: notificationMockOutboxData[0].tenantRecipientIds,
                        scopeRecipients: notificationMockOutboxData[0].scopeRecipients,
                        meta: notificationMockOutboxData[0].meta,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
