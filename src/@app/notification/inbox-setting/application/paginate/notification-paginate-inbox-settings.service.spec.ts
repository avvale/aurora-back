import { NotificationIInboxSettingRepository, NotificationMockInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationPaginateInboxSettingsService } from '@app/notification/inbox-setting/application/paginate/notification-paginate-inbox-settings.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxSettingsService', () =>
{
    let service: NotificationPaginateInboxSettingsService;
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
                NotificationPaginateInboxSettingsService,
                NotificationMockInboxSettingRepository,
                {
                    provide : NotificationIInboxSettingRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationPaginateInboxSettingsService);
        repository = module.get(NotificationIInboxSettingRepository);
        mockRepository = module.get(NotificationMockInboxSettingRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxSettingsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate inboxSettings', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
