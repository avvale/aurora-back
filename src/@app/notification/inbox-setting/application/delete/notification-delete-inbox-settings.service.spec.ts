/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingsService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-settings.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingsService', () =>
{
    let service: NotificationDeleteInboxSettingsService;
    let repository: NotificationIInboxSettingRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteInboxSettingsService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteInboxSettingsService);
        repository = module.get(NotificationIInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete inboxSetting and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
