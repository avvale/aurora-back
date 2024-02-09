/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationUpsertInboxSettingHandler, NotificationUpsertInboxSettingResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxSettingResolver', () =>
{
    let resolver: NotificationUpsertInboxSettingResolver;
    let handler: NotificationUpsertInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertInboxSettingResolver,
                {
                    provide : NotificationUpsertInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpsertInboxSettingResolver>(NotificationUpsertInboxSettingResolver);
        handler = module.get<NotificationUpsertInboxSettingHandler>(NotificationUpsertInboxSettingHandler);
    });

    test('NotificationUpsertInboxSettingResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxSettingResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxSetting upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(<NotificationUpdateInboxSettingByIdInput>notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
