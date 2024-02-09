/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationCreateInboxSettingService } from '@app/notification/inbox-setting/application/create/notification-create-inbox-setting.service';
import {
    NotificationInboxSettingAccountId,
    NotificationInboxSettingId,
    NotificationInboxSettingSort,
} from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingService', () =>

{
    let service: NotificationCreateInboxSettingService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateInboxSettingService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateInboxSettingService);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a inboxSetting and emit event', async () =>
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
