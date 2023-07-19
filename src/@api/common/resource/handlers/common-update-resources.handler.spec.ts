/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateResourcesHandler } from '@api/common/resource';
import { CommonUpdateResourcesInput } from '@api/graphql';
import { commonMockResourceData } from '@app/common/resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateResourcesHandler', () =>
{
    let handler: CommonUpdateResourcesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateResourcesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonUpdateResourcesHandler>(CommonUpdateResourcesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonUpdateResourcesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a resources updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData[0])));
            expect(await handler.main(<CommonUpdateResourcesInput>commonMockResourceData[0])).toBe(commonMockResourceData[0]);
        });
    });
});