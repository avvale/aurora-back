/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationUpsertInboxSettingService } from '@app/notification/inbox-setting/application/upsert/notification-upsert-inbox-setting.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxSettingService', () =>

{
    let service: NotificationUpsertInboxSettingService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpsertInboxSettingService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpsertInboxSettingService);
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxSettingService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a inboxSetting and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationInboxSettingId(notificationMockInboxSettingData[0].id),
                        accountId: new NotificationInboxSettingAccountId(notificationMockInboxSettingData[0].accountId),
                        sort: new NotificationInboxSettingSort(notificationMockInboxSettingData[0].sort),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
