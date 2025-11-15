/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportPaginateConfigsHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportPaginateConfigsHandler', () => {
    let handler: SupportPaginateConfigsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportPaginateConfigsHandler,
                {
                    provide: IQueryBus,
                    useValue: {
                        ask: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        handler = module.get<SupportPaginateConfigsHandler>(
            SupportPaginateConfigsHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SupportPaginateConfigsHandler should be defined', () => {
        expect(handler).toBeDefined();
    });

    describe('main', () => {
        test('SupportPaginateConfigsHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return a configs', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () =>
                    new Promise((resolve) =>
                        resolve({
                            total: supportMockConfigData.length,
                            count: supportMockConfigData.length,
                            rows: supportMockConfigData,
                        }),
                    ),
            );
            expect(await handler.main({}, {})).toEqual({
                total: supportMockConfigData.length,
                count: supportMockConfigData.length,
                rows: supportMockConfigData,
            });
        });
    });
});
