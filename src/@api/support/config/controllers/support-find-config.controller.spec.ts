import {
    SupportFindConfigController,
    SupportFindConfigHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigController', () => {
    let controller: SupportFindConfigController;
    let handler: SupportFindConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportFindConfigController],
            providers: [
                {
                    provide: SupportFindConfigHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportFindConfigController>(
            SupportFindConfigController,
        );
        handler = module.get<SupportFindConfigHandler>(
            SupportFindConfigHandler,
        );
    });

    describe('main', () => {
        test('SupportFindConfigController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return a config', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await controller.main()).toBe(supportMockConfigData[0]);
        });
    });
});
