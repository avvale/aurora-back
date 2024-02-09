import { NotificationCreateOutboxInput } from '@api/graphql';
import { NotificationCreateOutboxesHandler, NotificationCreateOutboxesResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxesResolver', () =>
{
    let resolver: NotificationCreateOutboxesResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutboxesResolver,
                {
                    provide : NotificationCreateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateOutboxesResolver>(NotificationCreateOutboxesResolver);
    });

    test('NotificationCreateOutboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outboxes created', async () =>
        {
            expect(await resolver.main(<NotificationCreateOutboxInput[]>notificationMockOutboxData)).toBe(undefined);
        });
    });
});
