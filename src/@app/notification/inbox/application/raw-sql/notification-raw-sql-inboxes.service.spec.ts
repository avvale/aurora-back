import { NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationRawSQLInboxesService } from '@app/notification/inbox/application/raw-sql/notification-raw-sql-inboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationRawSQLInboxesService ', () =>
{
    let service: NotificationRawSQLInboxesService ;
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
                NotificationRawSQLInboxesService ,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(NotificationRawSQLInboxesService );
        repository      = module.get(NotificationIInboxRepository);
        mockRepository  = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('RawSQLInboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get inboxes', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
