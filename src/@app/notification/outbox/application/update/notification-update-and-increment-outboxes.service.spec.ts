/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationUpdateAndIncrementOutboxesService } from '@app/notification/outbox/application/update/notification-update-and-increment-outboxes.service';
import {
    NotificationOutboxAccountRecipientIds,
    NotificationOutboxId,
    NotificationOutboxMeta,
    NotificationOutboxNotificationId,
    NotificationOutboxScopeRecipients,
    NotificationOutboxSort,
    NotificationOutboxTenantRecipientIds,
} from '@app/notification/outbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementOutboxesService', () =>
{
    let service: NotificationUpdateAndIncrementOutboxesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateAndIncrementOutboxesService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateAndIncrementOutboxesService);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a outboxes and emit event', async () =>
        {
            /* eslint-disable key-spacing */
            expect(
                await service.main(
                    {
                        id: new NotificationOutboxId(notificationMockOutboxData[0].id),
                        notificationId: new NotificationOutboxNotificationId(notificationMockOutboxData[0].notificationId),
                        sort: new NotificationOutboxSort(notificationMockOutboxData[0].sort),
                        accountRecipientIds: new NotificationOutboxAccountRecipientIds(notificationMockOutboxData[0].accountRecipientIds),
                        tenantRecipientIds: new NotificationOutboxTenantRecipientIds(notificationMockOutboxData[0].tenantRecipientIds),
                        scopeRecipients: new NotificationOutboxScopeRecipients(notificationMockOutboxData[0].scopeRecipients),
                        meta: new NotificationOutboxMeta(notificationMockOutboxData[0].meta),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
