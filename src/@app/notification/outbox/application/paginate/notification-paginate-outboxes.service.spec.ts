import { NotificationIOutboxRepository, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationPaginateOutboxesService } from '@app/notification/outbox/application/paginate/notification-paginate-outboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutboxesService', () =>
{
    let service: NotificationPaginateOutboxesService;
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
                NotificationPaginateOutboxesService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationPaginateOutboxesService);
        repository = module.get(NotificationIOutboxRepository);
        mockRepository = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate outboxes', async () =>
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
