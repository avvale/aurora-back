import { NotificationFindOutboxController, NotificationFindOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxController', () =>
{
    let controller: NotificationFindOutboxController;
    let handler: NotificationFindOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindOutboxController,
            ],
            providers: [
                {
                    provide : NotificationFindOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindOutboxController>(NotificationFindOutboxController);
        handler = module.get<NotificationFindOutboxHandler>(NotificationFindOutboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outbox', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main()).toBe(notificationMockOutboxData[0]);
        });
    });
});
