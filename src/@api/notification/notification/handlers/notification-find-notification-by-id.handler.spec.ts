/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationByIdHandler', () =>
{
    let handler: NotificationFindNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindNotificationByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindNotificationByIdHandler>(NotificationFindNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindNotificationByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notification by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    notificationMockNotificationData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
