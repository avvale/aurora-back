import { NotificationUpdateInboxesController, NotificationUpdateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxesController', () =>
{
    let controller: NotificationUpdateInboxesController;
    let handler: NotificationUpdateInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateInboxesController,
            ],
            providers: [
                {
                    provide : NotificationUpdateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateInboxesController>(NotificationUpdateInboxesController);
        handler = module.get<NotificationUpdateInboxesHandler>(NotificationUpdateInboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inboxes updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main(notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
