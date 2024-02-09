import { NotificationPaginateOutboxesController, NotificationPaginateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutboxesController', () =>
{
    let controller: NotificationPaginateOutboxesController;
    let handler: NotificationPaginateOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationPaginateOutboxesController,
            ],
            providers: [
                {
                    provide : NotificationPaginateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationPaginateOutboxesController>(NotificationPaginateOutboxesController);
        handler = module.get<NotificationPaginateOutboxesHandler>(NotificationPaginateOutboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockOutboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockOutboxData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockOutboxData,
            });
        });
    });
});
