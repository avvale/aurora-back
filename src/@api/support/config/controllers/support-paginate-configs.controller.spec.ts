import {
    SupportPaginateConfigsController,
    SupportPaginateConfigsHandler,
} from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportPaginateConfigsController', () => {
    let controller: SupportPaginateConfigsController;
    let handler: SupportPaginateConfigsHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SupportPaginateConfigsController],
            providers: [
                {
                    provide: SupportPaginateConfigsHandler,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        controller = module.get<SupportPaginateConfigsController>(
            SupportPaginateConfigsController,
        );
        handler = module.get<SupportPaginateConfigsHandler>(
            SupportPaginateConfigsHandler,
        );
    });

    describe('main', () => {
        test('SupportPaginateConfigsController should be defined', () => {
            expect(controller).toBeDefined();
        });

        test('should return a supportMockConfigData', async () => {
            jest.spyOn(handler, 'main').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve({
                            total: 5,
                            count: 5,
                            rows: supportMockConfigData,
                        }),
                    ),
            );
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows: supportMockConfigData,
            });
        });
    });
});
