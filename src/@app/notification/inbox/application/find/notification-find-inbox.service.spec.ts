import { NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationFindInboxService } from '@app/notification/inbox/application/find/notification-find-inbox.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxService', () =>
{
    let service: NotificationFindInboxService;
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
                NotificationFindInboxService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindInboxService);
        repository = module.get(NotificationIInboxRepository);
        mockRepository = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find inbox', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
