/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationByIdController', () =>
{
    let handler: NotificationDeleteOutBoxNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutBoxNotificationByIdHandler,
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

        handler = module.get<NotificationDeleteOutBoxNotificationByIdHandler>(NotificationDeleteOutBoxNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outBoxNotification deleted', async () =>
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
