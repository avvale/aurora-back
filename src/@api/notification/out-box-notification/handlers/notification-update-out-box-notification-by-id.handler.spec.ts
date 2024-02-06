/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationByIdHandler', () =>
{
    let handler: NotificationUpdateOutBoxNotificationByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutBoxNotificationByIdHandler,
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

        handler = module.get<NotificationUpdateOutBoxNotificationByIdHandler>(NotificationUpdateOutBoxNotificationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateOutBoxNotificationByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outBoxNotification updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateOutBoxNotificationByIdInput>notificationMockOutBoxNotificationData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
