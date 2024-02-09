/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxSettingRepository, notificationMockInboxSettingData, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationDeleteInboxSettingByIdService } from '@app/notification/inbox-setting/application/delete/notification-delete-inbox-setting-by-id.service';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingByIdService', () =>
{
    let service: NotificationDeleteInboxSettingByIdService;
    let repository: NotificationIInboxSettingRepository;
    let mockRepository: NotificationMockInboxSettingRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteInboxSettingByIdService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteInboxSettingByIdService);
        repository = module.get(NotificationIInboxSettingRepository);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete inboxSetting and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new NotificationInboxSettingId(notificationMockInboxSettingData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
