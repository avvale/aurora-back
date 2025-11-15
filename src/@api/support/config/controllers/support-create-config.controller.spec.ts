import {
    SupportCreateConfigController,
    SupportCreateConfigHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportCreateConfigController', () => {
    let controller: SupportCreateConfigController;
    let handler: SupportCreateConfigHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportCreateConfigController],
            providers: [
                {
                    provide: SupportCreateConfigHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportCreateConfigController>(
            SupportCreateConfigController,
        );
        handler = module.get<SupportCreateConfigHandler>(
            SupportCreateConfigHandler,
        );
    });

    describe('main', () => {
        test('SupportCreateConfigController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return an config created', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await controller.main(supportMockConfigData[0])).toBe(
                supportMockConfigData[0],
            );
        });
    });
});
