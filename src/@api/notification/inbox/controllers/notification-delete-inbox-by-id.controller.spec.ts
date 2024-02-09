/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxByIdController, NotificationDeleteInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxByIdController', () =>
{
    let controller: NotificationDeleteInboxByIdController;
    let handler: NotificationDeleteInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteInboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationDeleteInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteInboxByIdController>(NotificationDeleteInboxByIdController);
        handler = module.get<NotificationDeleteInboxByIdHandler>(NotificationDeleteInboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inbox deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main(notificationMockInboxData[0].id)).toBe(notificationMockInboxData[0]);
        });
    });
});
