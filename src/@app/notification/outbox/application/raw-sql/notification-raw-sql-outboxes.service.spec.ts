import { NotificationIOutboxRepository, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationRawSQLOutboxesService } from '@app/notification/outbox/application/raw-sql/notification-raw-sql-outboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationRawSQLOutboxesService ', () =>
{
    let service: NotificationRawSQLOutboxesService ;
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
                NotificationRawSQLOutboxesService ,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(NotificationRawSQLOutboxesService );
        repository      = module.get(NotificationIOutboxRepository);
        mockRepository  = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('RawSQLOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get outboxes', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
