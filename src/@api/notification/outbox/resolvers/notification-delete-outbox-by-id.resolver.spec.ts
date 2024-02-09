/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutboxByIdHandler, NotificationDeleteOutboxByIdResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxByIdResolver', () =>
{
    let resolver: NotificationDeleteOutboxByIdResolver;
    let handler: NotificationDeleteOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutboxByIdResolver,
                {
                    provide : NotificationDeleteOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteOutboxByIdResolver>(NotificationDeleteOutboxByIdResolver);
        handler = module.get<NotificationDeleteOutboxByIdHandler>(NotificationDeleteOutboxByIdHandler);
    });

    test('NotificationDeleteOutboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outbox deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(notificationMockOutboxData[0].id)).toBe(notificationMockOutboxData[0]);
        });
    });
});
