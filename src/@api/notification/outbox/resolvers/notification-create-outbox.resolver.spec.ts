/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateOutboxInput } from '@api/graphql';
import { NotificationCreateOutboxHandler, NotificationCreateOutboxResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxResolver', () =>
{
    let resolver: NotificationCreateOutboxResolver;
    let handler: NotificationCreateOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateOutboxResolver,
                {
                    provide : NotificationCreateOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateOutboxResolver>(NotificationCreateOutboxResolver);
        handler = module.get<NotificationCreateOutboxHandler>(NotificationCreateOutboxHandler);
    });

    test('NotificationCreateOutboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outbox created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(<NotificationCreateOutboxInput>notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
