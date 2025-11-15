/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportDeleteConfigByIdHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportDeleteConfigByIdController', () => {
    let handler: SupportDeleteConfigByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportDeleteConfigByIdHandler,
                {
                    provide: IQueryBus,
                    useValue: {
                        ask: () => {
                            /**/
                        },
                    },
                },
                {
                    provide: ICommandBus,
                    useValue: {
                        dispatch: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        handler = module.get<SupportDeleteConfigByIdHandler>(
            SupportDeleteConfigByIdHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () => {
        test('SupportDeleteConfigByIdHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return an config deleted', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(
                await handler.main(
                    supportMockConfigData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            ).toBe(supportMockConfigData[0]);
        });
    });
});
