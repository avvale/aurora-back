/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationUpdateInboxSettingByIdHandler, NotificationUpdateInboxSettingByIdResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingByIdResolver', () =>
{
    let resolver: NotificationUpdateInboxSettingByIdResolver;
    let handler: NotificationUpdateInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxSettingByIdResolver,
                {
                    provide : NotificationUpdateInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateInboxSettingByIdResolver>(NotificationUpdateInboxSettingByIdResolver);
        handler = module.get<NotificationUpdateInboxSettingByIdHandler>(NotificationUpdateInboxSettingByIdHandler);
    });

    test('NotificationUpdateInboxSettingByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a inboxSetting by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(<NotificationUpdateInboxSettingByIdInput>notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
