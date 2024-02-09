/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCheckNotificationsInboxHandler } from '../handlers/notification-check-notifications-inbox.handler';
import { NotificationCheckNotificationsInboxController } from './notification-check-notifications-inbox.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCheckNotificationsInboxController', () =>
{
    let controller: NotificationCheckNotificationsInboxController;
    let handler: NotificationCheckNotificationsInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCheckNotificationsInboxController,
            ],
            providers: [
                {
                    provide : NotificationCheckNotificationsInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCheckNotificationsInboxController>(NotificationCheckNotificationsInboxController);
        handler = module.get<NotificationCheckNotificationsInboxHandler>(NotificationCheckNotificationsInboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationCheckNotificationsInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});