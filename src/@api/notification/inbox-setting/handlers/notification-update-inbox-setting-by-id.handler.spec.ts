/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationUpdateInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingByIdHandler', () =>
{
    let handler: NotificationUpdateInboxSettingByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxSettingByIdHandler,
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

        handler = module.get<NotificationUpdateInboxSettingByIdHandler>(NotificationUpdateInboxSettingByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateInboxSettingByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxSetting updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateInboxSettingByIdInput>notificationMockInboxSettingData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
