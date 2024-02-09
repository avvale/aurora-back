/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxByIdHandler, NotificationDeleteInboxByIdResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxByIdResolver', () =>
{
    let resolver: NotificationDeleteInboxByIdResolver;
    let handler: NotificationDeleteInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxByIdResolver,
                {
                    provide : NotificationDeleteInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteInboxByIdResolver>(NotificationDeleteInboxByIdResolver);
        handler = module.get<NotificationDeleteInboxByIdHandler>(NotificationDeleteInboxByIdHandler);
    });

    test('NotificationDeleteInboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inbox deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(notificationMockInboxData[0].id)).toBe(notificationMockInboxData[0]);
        });
    });
});
