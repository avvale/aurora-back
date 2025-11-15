import {
    SupportFindConfigByIdController,
    SupportFindConfigByIdHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigByIdController', () => {
    let controller: SupportFindConfigByIdController;
    let handler: SupportFindConfigByIdHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportFindConfigByIdController],
            providers: [
                {
                    provide: SupportFindConfigByIdHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportFindConfigByIdController>(
            SupportFindConfigByIdController,
        );
        handler = module.get<SupportFindConfigByIdHandler>(
            SupportFindConfigByIdHandler,
        );
    });

    describe('main', () => {
        test('SupportFindConfigByIdController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return an config by id', async () => {
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
