/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationMockOutBoxNotificationRepository } from '@app/notification/out-box-notification';
import { NotificationUpdateOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/update/notification-update-out-box-notification-by-id.service';
import {
    NotificationOutBoxNotificationAccountIds,
    NotificationOutBoxNotificationAccountTenantOperator,
    NotificationOutBoxNotificationAttachments,
    NotificationOutBoxNotificationBody,
    NotificationOutBoxNotificationId,
    NotificationOutBoxNotificationIsImportant,
    NotificationOutBoxNotificationMeta,
    NotificationOutBoxNotificationScopes,
    NotificationOutBoxNotificationSort,
    NotificationOutBoxNotificationSubject,
    NotificationOutBoxNotificationTenantId,
    NotificationOutBoxNotificationTenantIds,
} from '@app/notification/out-box-notification/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationByIdService', () =>
{
    let service: NotificationUpdateOutBoxNotificationByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateOutBoxNotificationByIdService,
                NotificationMockOutBoxNotificationRepository,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateOutBoxNotificationByIdService);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a outBoxNotification and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationOutBoxNotificationId(notificationMockOutBoxNotificationData[0].id),
                        sort: new NotificationOutBoxNotificationSort(notificationMockOutBoxNotificationData[0].sort),
                        tenantId: new NotificationOutBoxNotificationTenantId(notificationMockOutBoxNotificationData[0].tenantId),
                        accountIds: new NotificationOutBoxNotificationAccountIds(notificationMockOutBoxNotificationData[0].accountIds),
                        accountTenantOperator: new NotificationOutBoxNotificationAccountTenantOperator(notificationMockOutBoxNotificationData[0].accountTenantOperator),
                        tenantIds: new NotificationOutBoxNotificationTenantIds(notificationMockOutBoxNotificationData[0].tenantIds),
                        scopes: new NotificationOutBoxNotificationScopes(notificationMockOutBoxNotificationData[0].scopes),
                        isImportant: new NotificationOutBoxNotificationIsImportant(notificationMockOutBoxNotificationData[0].isImportant),
                        subject: new NotificationOutBoxNotificationSubject(notificationMockOutBoxNotificationData[0].subject),
                        body: new NotificationOutBoxNotificationBody(notificationMockOutBoxNotificationData[0].body),
                        attachments: new NotificationOutBoxNotificationAttachments(notificationMockOutBoxNotificationData[0].attachments),
                        meta: new NotificationOutBoxNotificationMeta(notificationMockOutBoxNotificationData[0].meta),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
