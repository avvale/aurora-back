import { NotificationFindOutboxByIdController, NotificationFindOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxByIdController', () =>
{
    let controller: NotificationFindOutboxByIdController;
    let handler: NotificationFindOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindOutboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationFindOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindOutboxByIdController>(NotificationFindOutboxByIdController);
        handler = module.get<NotificationFindOutboxByIdHandler>(NotificationFindOutboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outbox by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main(notificationMockOutboxData[0].id)).toBe(notificationMockOutboxData[0]);
        });
    });
});
