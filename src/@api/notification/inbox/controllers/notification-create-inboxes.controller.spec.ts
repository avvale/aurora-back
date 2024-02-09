import { NotificationCreateInboxesController, NotificationCreateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxesController', () =>
{
    let controller: NotificationCreateInboxesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                NotificationCreateInboxesController,
            ],
            providers: [
                {
                    provide : NotificationCreateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateInboxesController>(NotificationCreateInboxesController);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockInboxData created', async () =>
        {
            expect(
                await controller.main(
                    notificationMockInboxData,
                ),
            )
                .toBe(undefined);
        });
    });
});
