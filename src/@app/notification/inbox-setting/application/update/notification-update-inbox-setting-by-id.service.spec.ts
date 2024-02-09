/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingByIdService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-setting-by-id.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingByIdService', () =>
{
    let service: NotificationUpdateInboxSettingByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateInboxSettingByIdService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateInboxSettingByIdService);
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a inboxSetting and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationInboxSettingId(notificationMockInboxSettingData[0].id),
                        accountId: new NotificationInboxSettingAccountId(notificationMockInboxSettingData[0].accountId),
                        sort: new NotificationInboxSettingSort(notificationMockInboxSettingData[0].sort),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
