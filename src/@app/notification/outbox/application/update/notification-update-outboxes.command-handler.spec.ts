import { notificationMockOutboxData, NotificationUpdateOutboxesCommand } from '@app/notification/outbox';
import { NotificationUpdateOutboxesCommandHandler } from '@app/notification/outbox/application/update/notification-update-outboxes.command-handler';
import { NotificationUpdateOutboxesService } from '@app/notification/outbox/application/update/notification-update-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxesCommandHandler', () =>
{
    let commandHandler: NotificationUpdateOutboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateOutboxesCommandHandler,
                {
                    provide : NotificationUpdateOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateOutboxesCommandHandler>(NotificationUpdateOutboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateOutboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outboxes updated', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateOutboxesCommand(
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
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
