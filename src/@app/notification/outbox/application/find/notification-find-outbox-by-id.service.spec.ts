import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationFindOutboxByIdService } from '@app/notification/outbox/application/find/notification-find-outbox-by-id.service';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxByIdService', () =>
{
    let service: NotificationFindOutboxByIdService;
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
                NotificationFindOutboxByIdService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationFindOutboxByIdService);
        repository = module.get(NotificationIOutboxRepository);
        mockRepository = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('FindOutboxByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find outbox by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new NotificationOutboxId(notificationMockOutboxData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
