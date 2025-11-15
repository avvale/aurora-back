/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportCreateConfigHandler } from '@api/support/config';
import { supportMockConfigData } from '@app/support/config';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportCreateConfigHandler', () => {
    let handler: SupportCreateConfigHandler;
    let queryBus: IQueryBus;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [
                SupportCreateConfigHandler,
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

        handler = module.get<SupportCreateConfigHandler>(
            SupportCreateConfigHandler,
        );
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () => {
        test('SupportCreateConfigHandler should be defined', () => {
            expect(handler).toBeDefined();
        });

        test('should return an config created', async () => {
            jest.spyOn(queryBus, 'ask').mockImplementation(
                () =>
                    new Promise((resolve) => resolve(supportMockConfigData[0])),
            );
            expect(
                await handler.main(supportMockConfigData[0], 'Europe/Madrid'),
            ).toBe(supportMockConfigData[0]);
        });
    });
});
