/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetInboxSettingsHandler, NotificationGetInboxSettingsResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxSettingsResolver', () =>
{
    let resolver: NotificationGetInboxSettingsResolver;
    let handler: NotificationGetInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetInboxSettingsResolver,
                {
                    provide : NotificationGetInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationGetInboxSettingsResolver>(NotificationGetInboxSettingsResolver);
        handler = module.get<NotificationGetInboxSettingsHandler>(NotificationGetInboxSettingsHandler);
    });

    test('NotificationGetInboxSettingsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxSettingsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a notificationMockInboxSettingData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData)));
            expect(await resolver.main()).toBe(notificationMockInboxSettingData);
        });
    });
});
