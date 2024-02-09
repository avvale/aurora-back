import { NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationMinInboxService } from '@app/notification/inbox/application/min/notification-min-inbox.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationMinInboxService', () =>
{
    let service: NotificationMinInboxService;
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
                NotificationMinInboxService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        min: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationMinInboxService);
        repository = module.get(NotificationIInboxRepository);
        mockRepository = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationMinInboxService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should min inboxes', async () =>
        {
            jest.spyOn(repository, 'min').mockImplementation((column: string) => new Promise(resolve => resolve(mockRepository.min(column))));
            expect(await service.main('id')).toBe(mockRepository.min('id'));
        });
    });
});
