/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateInboxSettingsHandler, NotificationPaginateInboxSettingsResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxSettingsResolver', () =>
{
    let resolver: NotificationPaginateInboxSettingsResolver;
    let handler: NotificationPaginateInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateInboxSettingsResolver,
                {
                    provide : NotificationPaginateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationPaginateInboxSettingsResolver>(NotificationPaginateInboxSettingsResolver);
        handler = module.get<NotificationPaginateInboxSettingsHandler>(NotificationPaginateInboxSettingsHandler);
    });

    test('NotificationPaginateInboxSettingsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxSettingsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notificationMockInboxSettingData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockInboxSettingData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockInboxSettingData,
            });
        });
    });
});
