/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateInboxesHandler, NotificationPaginateInboxesResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxesResolver', () =>
{
    let resolver: NotificationPaginateInboxesResolver;
    let handler: NotificationPaginateInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateInboxesResolver,
                {
                    provide : NotificationPaginateInboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationPaginateInboxesResolver>(NotificationPaginateInboxesResolver);
        handler = module.get<NotificationPaginateInboxesHandler>(NotificationPaginateInboxesHandler);
    });

    test('NotificationPaginateInboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notificationMockInboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockInboxData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockInboxData,
            });
        });
    });
});
