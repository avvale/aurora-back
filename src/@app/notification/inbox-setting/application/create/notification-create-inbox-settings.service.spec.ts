/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationCreateInboxSettingsService } from '@app/notification/inbox-setting/application/create/notification-create-inbox-settings.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingsService', () =>
{
    let service: NotificationCreateInboxSettingsService;
    let mockRepository: NotificationMockInboxSettingRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateInboxSettingsService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateInboxSettingsService);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('CreateInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create inboxSettings and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
