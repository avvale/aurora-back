/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportGetConfigsHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportGetConfigsHandler', () => {
    let handler: SupportGetConfigsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportGetConfigsHandler,
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

        handler = module.get<SupportGetConfigsHandler>(
            SupportGetConfigsHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SupportGetConfigsHandler should be defined', () => {
        expect(handler).toBeDefined();
    });

    describe('main', () => {
        test('SupportGetConfigsHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return a supportMockConfigData', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () => new Promise((resolve) => resolve(supportMockConfigData)),
            );
            expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
                supportMockConfigData,
            );
        });
    });
});
