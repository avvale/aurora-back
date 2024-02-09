/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCheckNotificationsInboxHandler } from '../handlers/notification-check-notifications-inbox.handler';
import { NotificationCheckNotificationsInboxResolver } from './notification-check-notifications-inbox.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCheckNotificationsInboxResolver', () =>
{
    let resolver: NotificationCheckNotificationsInboxResolver;
    let handler: NotificationCheckNotificationsInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCheckNotificationsInboxResolver,
                {
                    provide : NotificationCheckNotificationsInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCheckNotificationsInboxResolver>(NotificationCheckNotificationsInboxResolver);
        handler = module.get<NotificationCheckNotificationsInboxHandler>(NotificationCheckNotificationsInboxHandler);
    });

    test('NotificationCheckNotificationsInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCheckNotificationsInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });
    });
});