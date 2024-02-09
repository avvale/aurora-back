/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateOutboxesHandler, NotificationPaginateOutboxesResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutboxesResolver', () =>
{
    let resolver: NotificationPaginateOutboxesResolver;
    let handler: NotificationPaginateOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateOutboxesResolver,
                {
                    provide : NotificationPaginateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationPaginateOutboxesResolver>(NotificationPaginateOutboxesResolver);
        handler = module.get<NotificationPaginateOutboxesHandler>(NotificationPaginateOutboxesHandler);
    });

    test('NotificationPaginateOutboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notificationMockOutboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockOutboxData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockOutboxData,
            });
        });
    });
});
