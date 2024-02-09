/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutboxHandler, NotificationFindOutboxResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxResolver', () =>
{
    let resolver: NotificationFindOutboxResolver;
    let handler: NotificationFindOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutboxResolver,
                {
                    provide : NotificationFindOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindOutboxResolver>(NotificationFindOutboxResolver);
        handler = module.get<NotificationFindOutboxHandler>(NotificationFindOutboxHandler);
    });

    test('NotificationFindOutboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outbox', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main()).toBe(notificationMockOutboxData[0]);
        });
    });
});
