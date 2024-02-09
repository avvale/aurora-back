import { NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationGetInboxesService } from '@app/notification/inbox/application/get/notification-get-inboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxesService', () =>
{
    let service: NotificationGetInboxesService;
    let repository: NotificationIInboxRepository;
    let mockRepository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationGetInboxesService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationGetInboxesService);
        repository = module.get(NotificationIInboxRepository);
        mockRepository = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('GetInboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get inboxes', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
