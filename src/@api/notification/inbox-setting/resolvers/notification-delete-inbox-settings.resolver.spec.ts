/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxSettingsHandler, NotificationDeleteInboxSettingsResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingsResolver', () =>
{
    let resolver: NotificationDeleteInboxSettingsResolver;
    let handler: NotificationDeleteInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxSettingsResolver,
                {
                    provide : NotificationDeleteInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteInboxSettingsResolver>(NotificationDeleteInboxSettingsResolver);
        handler = module.get<NotificationDeleteInboxSettingsHandler>(NotificationDeleteInboxSettingsHandler);
    });

    test('NotificationDeleteInboxSettingsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notificationMockInboxSettingData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData)));
            expect(await resolver.main()).toBe(notificationMockInboxSettingData);
        });
    });
});
