/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxSettingByIdHandler, NotificationDeleteInboxSettingByIdResolver } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingByIdResolver', () =>
{
    let resolver: NotificationDeleteInboxSettingByIdResolver;
    let handler: NotificationDeleteInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxSettingByIdResolver,
                {
                    provide : NotificationDeleteInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteInboxSettingByIdResolver>(NotificationDeleteInboxSettingByIdResolver);
        handler = module.get<NotificationDeleteInboxSettingByIdHandler>(NotificationDeleteInboxSettingByIdHandler);
    });

    test('NotificationDeleteInboxSettingByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an inboxSetting deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await resolver.main(notificationMockInboxSettingData[0].id)).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
