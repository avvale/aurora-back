/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIOutboxRepository, NotificationMockOutboxRepository } from '@app/notification/outbox';
import { NotificationDeleteOutboxesService } from '@app/notification/outbox/application/delete/notification-delete-outboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxesService', () =>
{
    let service: NotificationDeleteOutboxesService;
    let repository: NotificationIOutboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteOutboxesService,
                NotificationMockOutboxRepository,
                {
                    provide : NotificationIOutboxRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteOutboxesService);
        repository = module.get(NotificationIOutboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete outbox and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
