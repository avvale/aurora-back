/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingByIdController', () =>
{
    let handler: NotificationDeleteInboxSettingByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxSettingByIdHandler,
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

        handler = module.get<NotificationDeleteInboxSettingByIdHandler>(NotificationDeleteInboxSettingByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inboxSetting deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await handler.main(
                    notificationMockInboxSettingData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
