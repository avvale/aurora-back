/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationUpdateOutboxByIdService } from '@app/notification/outbox/application/update/notification-update-outbox-by-id.service';
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

describe('NotificationUpdateOutboxByIdService', () =>
{
    let service: NotificationUpdateOutboxByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateOutboxByIdService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateOutboxByIdService);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a outbox and emit event', async () =>
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
                ),
            ).toBe(undefined);
        });
    });
});
