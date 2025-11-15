/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportUpdateConfigByIdInput } from '@api/graphql';
import { SupportUpdateConfigByIdHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateConfigByIdHandler', () => {
    let handler: SupportUpdateConfigByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportUpdateConfigByIdHandler,
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

        handler = module.get<SupportUpdateConfigByIdHandler>(
            SupportUpdateConfigByIdHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SupportUpdateConfigByIdHandler should be defined', () => {
        expect(handler).toBeDefined();
    });

    describe('main', () => {
        test('SupportUpdateConfigByIdHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return a config updated', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(
                await handler.main(
                    <SupportUpdateConfigByIdInput>supportMockConfigData[0],
                    {},
                    'Europe/Madrid',
                ),
            ).toBe(supportMockConfigData[0]);
        });
    });
});
