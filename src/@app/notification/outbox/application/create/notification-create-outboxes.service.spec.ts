/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationCreateOutboxesService } from '@app/notification/outbox/application/create/notification-create-outboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxesService', () =>
{
    let service: NotificationCreateOutboxesService;
    let mockRepository: NotificationMockOutboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationCreateOutboxesService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationCreateOutboxesService);
        mockRepository = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('CreateOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create outboxes and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
