/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxSettingsInput } from '@api/graphql';
import { NotificationUpdateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingsHandler', () =>
{
    let handler: NotificationUpdateInboxSettingsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxSettingsHandler,
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

        handler = module.get<NotificationUpdateInboxSettingsHandler>(NotificationUpdateInboxSettingsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateInboxSettingsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxSettings updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateInboxSettingsInput>notificationMockInboxSettingData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
