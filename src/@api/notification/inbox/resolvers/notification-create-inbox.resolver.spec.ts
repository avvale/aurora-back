/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateInboxInput } from '@api/graphql';
import { NotificationCreateInboxHandler, NotificationCreateInboxResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxResolver', () =>
{
    let resolver: NotificationCreateInboxResolver;
    let handler: NotificationCreateInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateInboxResolver,
                {
                    provide : NotificationCreateInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateInboxResolver>(NotificationCreateInboxResolver);
        handler = module.get<NotificationCreateInboxHandler>(NotificationCreateInboxHandler);
    });

    test('NotificationCreateInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inbox created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(<NotificationCreateInboxInput>notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
