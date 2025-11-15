/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportFindConfigByIdHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportFindConfigByIdHandler', () => {
    let handler: SupportFindConfigByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportFindConfigByIdHandler,
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

        handler = module.get<SupportFindConfigByIdHandler>(
            SupportFindConfigByIdHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SupportFindConfigByIdHandler should be defined', () => {
        expect(handler).toBeDefined();
    });

    describe('main', () => {
        test('SupportFindConfigByIdHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return an config by id', async () => {
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
