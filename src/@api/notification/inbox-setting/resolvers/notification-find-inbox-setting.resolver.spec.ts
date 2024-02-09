/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxSettingHandler, NotificationFindInboxSettingResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingResolver', () =>
{
    let resolver: NotificationFindInboxSettingResolver;
    let handler: NotificationFindInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxSettingResolver,
                {
                    provide : NotificationFindInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindInboxSettingResolver>(NotificationFindInboxSettingResolver);
        handler = module.get<NotificationFindInboxSettingHandler>(NotificationFindInboxSettingHandler);
    });

    test('NotificationFindInboxSettingResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inboxSetting', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main()).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
