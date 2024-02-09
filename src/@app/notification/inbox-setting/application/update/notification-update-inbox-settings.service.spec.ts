/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingsService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-settings.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingsService', () =>
{
    let service: NotificationUpdateInboxSettingsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationUpdateInboxSettingsService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationUpdateInboxSettingsService);
    });

    describe('main', () =>
    {
        test('UpdateInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a inboxSettings and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new NotificationInboxSettingId(notificationMockInboxSettingData[0].id),
                        accountId: new NotificationInboxSettingAccountId(notificationMockInboxSettingData[0].accountId),
                        sort: new NotificationInboxSettingSort(notificationMockInboxSettingData[0].sort),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
