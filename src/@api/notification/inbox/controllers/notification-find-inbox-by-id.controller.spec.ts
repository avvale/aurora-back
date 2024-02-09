import { NotificationFindInboxByIdController, NotificationFindInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxByIdController', () =>
{
    let controller: NotificationFindInboxByIdController;
    let handler: NotificationFindInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindInboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationFindInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindInboxByIdController>(NotificationFindInboxByIdController);
        handler = module.get<NotificationFindInboxByIdHandler>(NotificationFindInboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inbox by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main(notificationMockInboxData[0].id)).toBe(notificationMockInboxData[0]);
        });
    });
});
