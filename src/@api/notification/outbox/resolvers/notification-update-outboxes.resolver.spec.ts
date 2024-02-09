/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutboxesInput } from '@api/graphql';
import { NotificationUpdateOutboxesHandler, NotificationUpdateOutboxesResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxesResolver', () =>
{
    let resolver: NotificationUpdateOutboxesResolver;
    let handler: NotificationUpdateOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutboxesResolver,
                {
                    provide : NotificationUpdateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateOutboxesResolver>(NotificationUpdateOutboxesResolver);
        handler = module.get<NotificationUpdateOutboxesHandler>(NotificationUpdateOutboxesHandler);
    });

    test('NotificationUpdateOutboxesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outboxes updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(<NotificationUpdateOutboxesInput>notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
