/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonPaginateResourcesHandler } from '@api/common/resource';
import { commonMockResourceData } from '@app/common/resource';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateResourcesHandler', () =>
{
    let handler: CommonPaginateResourcesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonPaginateResourcesHandler,
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

        handler = module.get<CommonPaginateResourcesHandler>(CommonPaginateResourcesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('CommonPaginateResourcesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a resources', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: commonMockResourceData.length,
                count: commonMockResourceData.length,
                rows : commonMockResourceData,
            })));
            expect(await handler.main()).toEqual({
                total: commonMockResourceData.length,
                count: commonMockResourceData.length,
                rows : commonMockResourceData,
            });
        });
    });
});