import { NotificationUpsertInboxController, NotificationUpsertInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxController', () =>
{
    let controller: NotificationUpsertInboxController;
    let handler: NotificationUpsertInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpsertInboxController,
            ],
            providers: [
                {
                    provide : NotificationUpsertInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpsertInboxController>(NotificationUpsertInboxController);
        handler = module.get<NotificationUpsertInboxHandler>(NotificationUpsertInboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inbox upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await controller.main(notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
