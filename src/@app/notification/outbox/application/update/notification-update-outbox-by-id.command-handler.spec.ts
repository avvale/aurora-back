import { notificationMockOutboxData, NotificationUpdateOutboxByIdCommand } from '@app/notification/outbox';
import { NotificationUpdateOutboxByIdCommandHandler } from '@app/notification/outbox/application/update/notification-update-outbox-by-id.command-handler';
import { NotificationUpdateOutboxByIdService } from '@app/notification/outbox/application/update/notification-update-outbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxByIdCommandHandler', () =>
{
    let commandHandler: NotificationUpdateOutboxByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateOutboxByIdCommandHandler,
                {
                    provide : NotificationUpdateOutboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateOutboxByIdCommandHandler>(NotificationUpdateOutboxByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateOutboxByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outbox created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateOutboxByIdCommand(
                    {
                        id: notificationMockOutboxData[0].id,
                        notificationId: notificationMockOutboxData[0].notificationId,
                        sort: notificationMockOutboxData[0].sort,
                        accountRecipientIds: notificationMockOutboxData[0].accountRecipientIds,
                        tenantRecipientIds: notificationMockOutboxData[0].tenantRecipientIds,
                        scopeRecipients: notificationMockOutboxData[0].scopeRecipients,
                        meta: notificationMockOutboxData[0].meta,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
