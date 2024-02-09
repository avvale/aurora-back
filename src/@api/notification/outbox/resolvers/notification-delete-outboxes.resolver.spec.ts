/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutboxesHandler, NotificationDeleteOutboxesResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxesResolver', () =>
{
    let resolver: NotificationDeleteOutboxesResolver;
    let handler: NotificationDeleteOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutboxesResolver,
                {
                    provide : NotificationDeleteOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteOutboxesResolver>(NotificationDeleteOutboxesResolver);
        handler = module.get<NotificationDeleteOutboxesHandler>(NotificationDeleteOutboxesHandler);
    });

    test('NotificationDeleteOutboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notificationMockOutboxData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData)));
            expect(await resolver.main()).toBe(notificationMockOutboxData);
        });
    });
});
