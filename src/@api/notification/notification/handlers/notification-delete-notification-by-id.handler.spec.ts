/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationByIdController', () =>
{
    let handler: NotificationDeleteNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteNotificationByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationDeleteNotificationByIdHandler>(NotificationDeleteNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notification deleted', async () =>
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
