import { NotificationDeleteOutboxByIdCommand, notificationMockOutboxData } from '@app/notification/outbox';
import { NotificationDeleteOutboxByIdCommandHandler } from '@app/notification/outbox/application/delete/notification-delete-outbox-by-id.command-handler';
import { NotificationDeleteOutboxByIdService } from '@app/notification/outbox/application/delete/notification-delete-outbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxByIdCommandHandler', () =>
{
    let commandHandler: NotificationDeleteOutboxByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteOutboxByIdCommandHandler,
                {
                    provide : NotificationDeleteOutboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteOutboxByIdCommandHandler>(NotificationDeleteOutboxByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the NotificationDeleteOutboxByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteOutboxByIdCommand(
                    notificationMockOutboxData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
