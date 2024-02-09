import { NotificationIOutboxRepository, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationFindOutboxService } from '@app/notification/outbox/application/find/notification-find-outbox.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxService', () =>
{
    let service: NotificationFindOutboxService;
    let repository: NotificationIOutboxRepository;
    let mockRepository: NotificationMockOutboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationFindOutboxService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindOutboxService);
        repository = module.get(NotificationIOutboxRepository);
        mockRepository = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find outbox', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
