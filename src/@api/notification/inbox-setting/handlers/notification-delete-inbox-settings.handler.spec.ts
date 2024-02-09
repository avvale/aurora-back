/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingsHandler', () =>
{
    let handler: NotificationDeleteInboxSettingsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxSettingsHandler,
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

        handler = module.get<NotificationDeleteInboxSettingsHandler>(NotificationDeleteInboxSettingsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationDeleteInboxSettingsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockInboxSettingData deleted', async () =>
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
