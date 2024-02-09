/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxSettingsHandler', () =>
{
    let handler: NotificationPaginateInboxSettingsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateInboxSettingsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationPaginateInboxSettingsHandler>(NotificationPaginateInboxSettingsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationPaginateInboxSettingsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxSettingsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxSettings', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: notificationMockInboxSettingData.length,
                count: notificationMockInboxSettingData.length,
                rows : notificationMockInboxSettingData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: notificationMockInboxSettingData.length,
                    count: notificationMockInboxSettingData.length,
                    rows : notificationMockInboxSettingData,
                });
        });
    });
});
