/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationDeleteInboxesService } from '@app/notification/inbox/application/delete/notification-delete-inboxes.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxesService', () =>
{
    let service: NotificationDeleteInboxesService;
    let repository: NotificationIInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                NotificationDeleteInboxesService,
                NotificationMockInboxRepository,
                {
                    provide : NotificationIInboxRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(NotificationDeleteInboxesService);
        repository = module.get(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxesService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete inbox and emit event', async () =>
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
