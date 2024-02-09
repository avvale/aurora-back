/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxHandler, NotificationFindInboxResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxResolver', () =>
{
    let resolver: NotificationFindInboxResolver;
    let handler: NotificationFindInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxResolver,
                {
                    provide : NotificationFindInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindInboxResolver>(NotificationFindInboxResolver);
        handler = module.get<NotificationFindInboxHandler>(NotificationFindInboxHandler);
    });

    test('NotificationFindInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inbox', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main()).toBe(notificationMockInboxData[0]);
        });
    });
});
