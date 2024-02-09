import { NotificationFindInboxController, NotificationFindInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxController', () =>
{
    let controller: NotificationFindInboxController;
    let handler: NotificationFindInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindInboxController,
            ],
            providers: [
                {
                    provide : NotificationFindInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindInboxController>(NotificationFindInboxController);
        handler = module.get<NotificationFindInboxHandler>(NotificationFindInboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inbox', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main()).toBe(notificationMockInboxData[0]);
        });
    });
});
