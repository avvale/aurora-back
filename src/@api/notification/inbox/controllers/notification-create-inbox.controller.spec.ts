import { NotificationCreateInboxController, NotificationCreateInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxController', () =>
{
    let controller: NotificationCreateInboxController;
    let handler: NotificationCreateInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCreateInboxController,
            ],
            providers: [
                {
                    provide : NotificationCreateInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateInboxController>(NotificationCreateInboxController);
        handler = module.get<NotificationCreateInboxHandler>(NotificationCreateInboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inbox created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await controller.main(
                    notificationMockInboxData[0],
                ),
            )
                .toBe(notificationMockInboxData[0]);
        });
    });
});
