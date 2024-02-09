/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxRepository, notificationMockInboxData, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationDeleteInboxByIdService } from '@app/notification/inbox/application/delete/notification-delete-inbox-by-id.service';
import { NotificationInboxId } from '@app/notification/inbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxByIdService', () =>
{
    let service: NotificationDeleteInboxByIdService;
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
                NotificationDeleteInboxByIdService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteInboxByIdService);
        repository = module.get(NotificationIInboxRepository);
        mockRepository = module.get(NotificationMockInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete inbox and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new NotificationInboxId(notificationMockInboxData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
