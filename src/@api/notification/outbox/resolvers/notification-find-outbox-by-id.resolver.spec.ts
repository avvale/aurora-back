/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutboxByIdHandler, NotificationFindOutboxByIdResolver } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxByIdResolver', () =>
{
    let resolver: NotificationFindOutboxByIdResolver;
    let handler: NotificationFindOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutboxByIdResolver,
                {
                    provide : NotificationFindOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindOutboxByIdResolver>(NotificationFindOutboxByIdResolver);
        handler = module.get<NotificationFindOutboxByIdHandler>(NotificationFindOutboxByIdHandler);
    });

    test('NotificationFindOutboxByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outbox by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await resolver.main(notificationMockOutboxData[0].id)).toBe(notificationMockOutboxData[0]);
        });
    });
});
