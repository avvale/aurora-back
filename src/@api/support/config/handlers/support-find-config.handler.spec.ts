/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportFindConfigHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigHandler', () => {
    let handler: SupportFindConfigHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportFindConfigHandler,
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

        handler = module.get<SupportFindConfigHandler>(
            SupportFindConfigHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SupportFindConfigHandler should be defined', () => {
        expect(handler).toBeDefined();
    });

    describe('main', () => {
        test('SupportFindConfigHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return a config', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(await handler.main({}, {}, 'Europe/Madrid')).toBe(
                supportMockConfigData[0],
            );
        });
    });
});
