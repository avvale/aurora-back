/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxSettingHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingHandler', () =>
{
    let handler: NotificationFindInboxSettingHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxSettingHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindInboxSettingHandler>(NotificationFindInboxSettingHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindInboxSettingHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxSetting', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
