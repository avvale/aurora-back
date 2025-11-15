/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    SupportDeleteConfigByIdController,
    SupportDeleteConfigByIdHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportDeleteConfigByIdController', () => {
    let controller: SupportDeleteConfigByIdController;
    let handler: SupportDeleteConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportDeleteConfigByIdController],
            providers: [
                {
                    provide: SupportDeleteConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportDeleteConfigByIdController>(
            SupportDeleteConfigByIdController,
        );
        handler = module.get<SupportDeleteConfigByIdHandler>(
            SupportDeleteConfigByIdHandler,
        );
    });

    describe('main', () => {
        test('SupportDeleteConfigByIdController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return an config deleted', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await controller.main(supportMockConfigData[0].id)).toBe(
                supportMockConfigData[0],
            );
        });
    });
});
