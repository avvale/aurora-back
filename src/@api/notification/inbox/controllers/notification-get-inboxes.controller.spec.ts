import { NotificationGetInboxesController, NotificationGetInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxesController', () =>
{
    let controller: NotificationGetInboxesController;
    let handler: NotificationGetInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationGetInboxesController,
            ],
            providers: [
                {
                    provide : NotificationGetInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationGetInboxesController>(NotificationGetInboxesController);
        handler = module.get<NotificationGetInboxesHandler>(NotificationGetInboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationGetInboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockInboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData)));
            expect(await controller.main()).toBe(notificationMockInboxData);
        });
    });
});
