/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxesInput } from '@api/graphql';
import { NotificationUpdateInboxesHandler, NotificationUpdateInboxesResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxesResolver', () =>
{
    let resolver: NotificationUpdateInboxesResolver;
    let handler: NotificationUpdateInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxesResolver,
                {
                    provide : NotificationUpdateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateInboxesResolver>(NotificationUpdateInboxesResolver);
        handler = module.get<NotificationUpdateInboxesHandler>(NotificationUpdateInboxesHandler);
    });

    test('NotificationUpdateInboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inboxes updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(<NotificationUpdateInboxesInput>notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
