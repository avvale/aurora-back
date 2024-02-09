/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationUpsertOutboxHandler, NotificationUpsertOutboxResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutboxResolver', () =>
{
    let resolver: NotificationUpsertOutboxResolver;
    let handler: NotificationUpsertOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertOutboxResolver,
                {
                    provide : NotificationUpsertOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpsertOutboxResolver>(NotificationUpsertOutboxResolver);
        handler = module.get<NotificationUpsertOutboxHandler>(NotificationUpsertOutboxHandler);
    });

    test('NotificationUpsertOutboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outbox upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(<NotificationUpdateOutboxByIdInput>notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
