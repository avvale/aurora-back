import {
    SupportGetConfigsController,
    SupportGetConfigsHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportGetConfigsController', () => {
    let controller: SupportGetConfigsController;
    let handler: SupportGetConfigsHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportGetConfigsController],
            providers: [
                {
                    provide: SupportGetConfigsHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportGetConfigsController>(
            SupportGetConfigsController,
        );
        handler = module.get<SupportGetConfigsHandler>(
            SupportGetConfigsHandler,
        );
    });

    describe('main', () => {
        test('SupportGetConfigsController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return a supportMockConfigData', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () => new Promise((resolve) => resolve(supportMockConfigData)),
            );
            expect(await controller.main()).toBe(supportMockConfigData);
        });
    });
});
