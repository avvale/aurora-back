/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxesHandler, NotificationDeleteInboxesResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxesResolver', () =>
{
    let resolver: NotificationDeleteInboxesResolver;
    let handler: NotificationDeleteInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxesResolver,
                {
                    provide : NotificationDeleteInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteInboxesResolver>(NotificationDeleteInboxesResolver);
        handler = module.get<NotificationDeleteInboxesHandler>(NotificationDeleteInboxesHandler);
    });

    test('NotificationDeleteInboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notificationMockInboxData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData)));
            expect(await resolver.main()).toBe(notificationMockInboxData);
        });
    });
});
