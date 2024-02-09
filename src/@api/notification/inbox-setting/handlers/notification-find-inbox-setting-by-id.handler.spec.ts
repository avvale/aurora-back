/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingByIdHandler', () =>
{
    let handler: NotificationFindInboxSettingByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxSettingByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindInboxSettingByIdHandler>(NotificationFindInboxSettingByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindInboxSettingByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inboxSetting by id', async () =>
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
