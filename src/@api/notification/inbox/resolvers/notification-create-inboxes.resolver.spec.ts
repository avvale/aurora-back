import { NotificationCreateInboxInput } from '@api/graphql';
import { NotificationCreateInboxesHandler, NotificationCreateInboxesResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxesResolver', () =>
{
    let resolver: NotificationCreateInboxesResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxesResolver,
                {
                    provide : NotificationCreateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateInboxesResolver>(NotificationCreateInboxesResolver);
    });

    test('NotificationCreateInboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxes created', async () =>
        {
            expect(await resolver.main(<NotificationCreateInboxInput[]>notificationMockInboxData)).toBe(undefined);
        });
    });
});
