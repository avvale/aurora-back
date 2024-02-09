import { NotificationUpdateInboxByIdController, NotificationUpdateInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxByIdController', () =>
{
    let controller: NotificationUpdateInboxByIdController;
    let handler: NotificationUpdateInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateInboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationUpdateInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateInboxByIdController>(NotificationUpdateInboxByIdController);
        handler = module.get<NotificationUpdateInboxByIdHandler>(NotificationUpdateInboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inbox updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main(notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
