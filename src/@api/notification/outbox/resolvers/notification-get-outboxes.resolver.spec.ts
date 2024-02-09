/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetOutboxesHandler, NotificationGetOutboxesResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutboxesResolver', () =>
{
    let resolver: NotificationGetOutboxesResolver;
    let handler: NotificationGetOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetOutboxesResolver,
                {
                    provide : NotificationGetOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationGetOutboxesResolver>(NotificationGetOutboxesResolver);
        handler = module.get<NotificationGetOutboxesHandler>(NotificationGetOutboxesHandler);
    });

    test('NotificationGetOutboxesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetOutboxesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a notificationMockOutboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData)));
            expect(await resolver.main()).toBe(notificationMockOutboxData);
        });
    });
});
