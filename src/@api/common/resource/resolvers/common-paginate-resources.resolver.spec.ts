/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonPaginateResourcesResolver } from './common-paginate-resources.resolver';
import { CommonPaginateResourcesHandler } from '../handlers/common-paginate-resources.handler';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonPaginateResourcesResolver', () =>
{
    let resolver: CommonPaginateResourcesResolver;
    let handler: CommonPaginateResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonPaginateResourcesResolver,
                {
                    provide : CommonPaginateResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonPaginateResourcesResolver>(CommonPaginateResourcesResolver);
        handler = module.get<CommonPaginateResourcesHandler>(CommonPaginateResourcesHandler);
    });

    test('CommonPaginateResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a commonMockResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : commonMockResourceData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : commonMockResourceData,
            });
        });
    });
});