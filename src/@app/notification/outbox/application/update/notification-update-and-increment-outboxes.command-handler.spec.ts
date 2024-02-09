import { notificationMockOutboxData, NotificationUpdateAndIncrementOutboxesCommand } from '@app/notification/outbox';
import { NotificationUpdateAndIncrementOutboxesCommandHandler } from '@app/notification/outbox/application/update/notification-update-and-increment-outboxes.command-handler';
import { NotificationUpdateAndIncrementOutboxesService } from '@app/notification/outbox/application/update/notification-update-and-increment-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementOutboxesCommandHandler', () =>
{
    let commandHandler: NotificationUpdateAndIncrementOutboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateAndIncrementOutboxesCommandHandler,
                {
                    provide : NotificationUpdateAndIncrementOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateAndIncrementOutboxesCommandHandler>(NotificationUpdateAndIncrementOutboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementOutboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outboxes updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new NotificationUpdateAndIncrementOutboxesCommand(
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
            /* eslint-enable key-spacing */
        });
    });
});
