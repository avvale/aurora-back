/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetInboxesHandler, NotificationGetInboxesResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxesResolver', () =>
{
    let resolver: NotificationGetInboxesResolver;
    let handler: NotificationGetInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetInboxesResolver,
                {
                    provide : NotificationGetInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationGetInboxesResolver>(NotificationGetInboxesResolver);
        handler = module.get<NotificationGetInboxesHandler>(NotificationGetInboxesHandler);
    });

    test('NotificationGetInboxesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a notificationMockInboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData)));
            expect(await resolver.main()).toBe(notificationMockInboxData);
        });
    });
});
