/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationUpdateOutboxesService } from '@app/notification/outbox/application/update/notification-update-outboxes.service';
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

describe('NotificationUpdateOutboxesService', () =>
{
    let service: NotificationUpdateOutboxesService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateOutboxesService,
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

        service = module.get(NotificationUpdateOutboxesService);
    });

    describe('main', () =>
    {
        test('UpdateOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a outboxes and emit event', async () =>
        {
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
        });
    });
});
