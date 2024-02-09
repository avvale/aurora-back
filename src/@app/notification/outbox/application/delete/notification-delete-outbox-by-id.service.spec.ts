/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationDeleteOutboxByIdService } from '@app/notification/outbox/application/delete/notification-delete-outbox-by-id.service';
import { NotificationOutboxId } from '@app/notification/outbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxByIdService', () =>
{
    let service: NotificationDeleteOutboxByIdService;
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
                NotificationDeleteOutboxByIdService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteOutboxByIdService);
        repository = module.get(NotificationIOutboxRepository);
        mockRepository = module.get(NotificationMockOutboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete outbox and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new NotificationOutboxId(notificationMockOutboxData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
