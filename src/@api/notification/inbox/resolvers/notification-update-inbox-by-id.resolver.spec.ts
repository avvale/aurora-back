/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxByIdInput } from '@api/graphql';
import { NotificationUpdateInboxByIdHandler, NotificationUpdateInboxByIdResolver } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxByIdResolver', () =>
{
    let resolver: NotificationUpdateInboxByIdResolver;
    let handler: NotificationUpdateInboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxByIdResolver,
                {
                    provide : NotificationUpdateInboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateInboxByIdResolver>(NotificationUpdateInboxByIdResolver);
        handler = module.get<NotificationUpdateInboxByIdHandler>(NotificationUpdateInboxByIdHandler);
    });

    test('NotificationUpdateInboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inbox by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(await resolver.main(<NotificationUpdateInboxByIdInput>notificationMockInboxData[0])).toBe(notificationMockInboxData[0]);
        });
    });
});
