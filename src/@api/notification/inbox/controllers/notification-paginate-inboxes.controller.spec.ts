import { NotificationPaginateInboxesController, NotificationPaginateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxesController', () =>
{
    let controller: NotificationPaginateInboxesController;
    let handler: NotificationPaginateInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationPaginateInboxesController,
            ],
            providers: [
                {
                    provide : NotificationPaginateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationPaginateInboxesController>(NotificationPaginateInboxesController);
        handler = module.get<NotificationPaginateInboxesHandler>(NotificationPaginateInboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockInboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockInboxData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockInboxData,
            });
        });
    });
});
