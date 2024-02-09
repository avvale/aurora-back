import { NotificationIInboxRepository, notificationMockInboxData, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationFindInboxByIdService } from '@app/notification/inbox/application/find/notification-find-inbox-by-id.service';
import { NotificationInboxId } from '@app/notification/inbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxByIdService', () =>
{
    let service: NotificationFindInboxByIdService;
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
                NotificationFindInboxByIdService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindInboxByIdService);
        repository = module.get(NotificationIInboxRepository);
        mockRepository = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('FindInboxByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find inbox by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new NotificationInboxId(notificationMockInboxData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
