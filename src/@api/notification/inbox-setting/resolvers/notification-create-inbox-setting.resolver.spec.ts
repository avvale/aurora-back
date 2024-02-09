/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateInboxSettingInput } from '@api/graphql';
import { NotificationCreateInboxSettingHandler, NotificationCreateInboxSettingResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingResolver', () =>
{
    let resolver: NotificationCreateInboxSettingResolver;
    let handler: NotificationCreateInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateInboxSettingResolver,
                {
                    provide : NotificationCreateInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateInboxSettingResolver>(NotificationCreateInboxSettingResolver);
        handler = module.get<NotificationCreateInboxSettingHandler>(NotificationCreateInboxSettingHandler);
    });

    test('NotificationCreateInboxSettingResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxSetting created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(<NotificationCreateInboxSettingInput>notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
