/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxByIdHandler, NotificationFindInboxByIdResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxByIdResolver', () =>
{
    let resolver: NotificationFindInboxByIdResolver;
    let handler: NotificationFindInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxByIdResolver,
                {
                    provide : NotificationFindInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindInboxByIdResolver>(NotificationFindInboxByIdResolver);
        handler = module.get<NotificationFindInboxByIdHandler>(NotificationFindInboxByIdHandler);
    });

    test('NotificationFindInboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inbox by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(notificationMockInboxData[0].id)).toBe(notificationMockInboxData[0]);
        });
    });
});
