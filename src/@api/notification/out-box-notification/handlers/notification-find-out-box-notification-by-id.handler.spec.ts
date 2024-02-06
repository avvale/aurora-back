/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationByIdHandler', () =>
{
    let handler: NotificationFindOutBoxNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutBoxNotificationByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindOutBoxNotificationByIdHandler>(NotificationFindOutBoxNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindOutBoxNotificationByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outBoxNotification by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await handler.main(
                    notificationMockOutBoxNotificationData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
