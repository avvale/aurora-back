/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationUpdateOutboxByIdHandler, NotificationUpdateOutboxByIdResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxByIdResolver', () =>
{
    let resolver: NotificationUpdateOutboxByIdResolver;
    let handler: NotificationUpdateOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutboxByIdResolver,
                {
                    provide : NotificationUpdateOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateOutboxByIdResolver>(NotificationUpdateOutboxByIdResolver);
        handler = module.get<NotificationUpdateOutboxByIdHandler>(NotificationUpdateOutboxByIdHandler);
    });

    test('NotificationUpdateOutboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outbox by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(<NotificationUpdateOutboxByIdInput>notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
