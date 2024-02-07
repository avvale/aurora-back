/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { NotificationUpdateNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationByIdHandler', () =>
{
    let handler: NotificationUpdateNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateNotificationByIdHandler,
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

        handler = module.get<NotificationUpdateNotificationByIdHandler>(NotificationUpdateNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateNotificationByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notification updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateNotificationByIdInput>notificationMockNotificationData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
