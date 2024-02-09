import { NotificationCreateInboxSettingInput } from '@api/graphql';
import { NotificationCreateInboxSettingsHandler, NotificationCreateInboxSettingsResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingsResolver', () =>
{
    let resolver: NotificationCreateInboxSettingsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxSettingsResolver,
                {
                    provide : NotificationCreateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateInboxSettingsResolver>(NotificationCreateInboxSettingsResolver);
    });

    test('NotificationCreateInboxSettingsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxSettings created', async () =>
        {
            expect(await resolver.main(<NotificationCreateInboxSettingInput[]>notificationMockInboxSettingData)).toBe(undefined);
        });
    });
});
