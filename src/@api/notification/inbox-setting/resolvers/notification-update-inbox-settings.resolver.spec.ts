/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxSettingsInput } from '@api/graphql';
import { NotificationUpdateInboxSettingsHandler, NotificationUpdateInboxSettingsResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingsResolver', () =>
{
    let resolver: NotificationUpdateInboxSettingsResolver;
    let handler: NotificationUpdateInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxSettingsResolver,
                {
                    provide : NotificationUpdateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateInboxSettingsResolver>(NotificationUpdateInboxSettingsResolver);
        handler = module.get<NotificationUpdateInboxSettingsHandler>(NotificationUpdateInboxSettingsHandler);
    });

    test('NotificationUpdateInboxSettingsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inboxSettings updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(<NotificationUpdateInboxSettingsInput>notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
