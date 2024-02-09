/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxByIdInput } from '@api/graphql';
import { NotificationUpsertInboxHandler, NotificationUpsertInboxResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxResolver', () =>
{
    let resolver: NotificationUpsertInboxResolver;
    let handler: NotificationUpsertInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertInboxResolver,
                {
                    provide : NotificationUpsertInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpsertInboxResolver>(NotificationUpsertInboxResolver);
        handler = module.get<NotificationUpsertInboxHandler>(NotificationUpsertInboxHandler);
    });

    test('NotificationUpsertInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inbox upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(<NotificationUpdateInboxByIdInput>notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
