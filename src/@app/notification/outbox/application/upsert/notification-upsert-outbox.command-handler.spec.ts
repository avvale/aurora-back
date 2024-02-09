import { notificationMockOutboxData, NotificationUpsertOutboxCommand } from '@app/notification/outbox';
import { NotificationUpsertOutboxCommandHandler } from '@app/notification/outbox/application/upsert/notification-upsert-outbox.command-handler';
import { NotificationUpsertOutboxService } from '@app/notification/outbox/application/upsert/notification-upsert-outbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutboxCommandHandler', () =>
{
    let commandHandler: NotificationUpsertOutboxCommandHandler;
    let service: NotificationUpsertOutboxService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpsertOutboxCommandHandler,
                {
                    provide : NotificationUpsertOutboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpsertOutboxCommandHandler>(NotificationUpsertOutboxCommandHandler);
        service = module.get<NotificationUpsertOutboxService>(NotificationUpsertOutboxService);
    });

    describe('main', () =>
    {
        test('UpsertOutboxCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the NotificationUpsertOutboxService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpsertOutboxCommand(
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
