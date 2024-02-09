/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpsertInboxSettingHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxSettingHandler', () =>
{
    let handler: NotificationUpsertInboxSettingHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertInboxSettingHandler,
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

        handler = module.get<NotificationUpsertInboxSettingHandler>(NotificationUpsertInboxSettingHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxSettingHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inboxSetting upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await handler.main(
                    notificationMockInboxSettingData[0],
                    'Europe/Madrid',
                ))
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
