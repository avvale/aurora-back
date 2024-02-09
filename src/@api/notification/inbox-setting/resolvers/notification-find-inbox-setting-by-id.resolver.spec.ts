/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxSettingByIdHandler, NotificationFindInboxSettingByIdResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingByIdResolver', () =>
{
    let resolver: NotificationFindInboxSettingByIdResolver;
    let handler: NotificationFindInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxSettingByIdResolver,
                {
                    provide : NotificationFindInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindInboxSettingByIdResolver>(NotificationFindInboxSettingByIdResolver);
        handler = module.get<NotificationFindInboxSettingByIdHandler>(NotificationFindInboxSettingByIdHandler);
    });

    test('NotificationFindInboxSettingByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxSetting by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(notificationMockInboxSettingData[0].id)).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
