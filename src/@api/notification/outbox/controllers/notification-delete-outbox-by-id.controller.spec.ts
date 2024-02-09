/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutboxByIdController, NotificationDeleteOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxByIdController', () =>
{
    let controller: NotificationDeleteOutboxByIdController;
    let handler: NotificationDeleteOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteOutboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationDeleteOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteOutboxByIdController>(NotificationDeleteOutboxByIdController);
        handler = module.get<NotificationDeleteOutboxByIdHandler>(NotificationDeleteOutboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outbox deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main(notificationMockOutboxData[0].id)).toBe(notificationMockOutboxData[0]);
        });
    });
});
