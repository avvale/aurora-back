import {
    SupportUpdateConfigByIdController,
    SupportUpdateConfigByIdHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateConfigByIdController', () => {
    let controller: SupportUpdateConfigByIdController;
    let handler: SupportUpdateConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportUpdateConfigByIdController],
            providers: [
                {
                    provide: SupportUpdateConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportUpdateConfigByIdController>(
            SupportUpdateConfigByIdController,
        );
        handler = module.get<SupportUpdateConfigByIdHandler>(
            SupportUpdateConfigByIdHandler,
        );
    });

    describe('main', () => {
        test('SupportUpdateConfigByIdController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return a config updated', async () => {
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
