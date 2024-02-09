import { NotificationDeleteInboxesController, NotificationDeleteInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxesController', () =>
{
    let controller: NotificationDeleteInboxesController;
    let handler: NotificationDeleteInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteInboxesController,
            ],
            providers: [
                {
                    provide : NotificationDeleteInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteInboxesController>(NotificationDeleteInboxesController);
        handler = module.get<NotificationDeleteInboxesHandler>(NotificationDeleteInboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockInboxData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData)));
            expect(await controller.main()).toBe(notificationMockInboxData);
        });
    });
});
