/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxSettingsHandler', () =>
{
    let handler: NotificationGetInboxSettingsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetInboxSettingsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationGetInboxSettingsHandler>(NotificationGetInboxSettingsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationGetInboxSettingsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxSettingsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notificationMockInboxSettingData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxSettingData);
        });
    });
});
