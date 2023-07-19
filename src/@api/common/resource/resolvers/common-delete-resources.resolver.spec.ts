/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonDeleteResourcesResolver } from './common-delete-resources.resolver';
import { CommonDeleteResourcesHandler } from '../handlers/common-delete-resources.handler';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonDeleteResourcesResolver', () =>
{
    let resolver: CommonDeleteResourcesResolver;
    let handler: CommonDeleteResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteResourcesResolver,
                {
                    provide : CommonDeleteResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteResourcesResolver>(CommonDeleteResourcesResolver);
        handler = module.get<CommonDeleteResourcesHandler>(CommonDeleteResourcesHandler);
    });

    test('CommonDeleteResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an commonMockResourceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData)));
            expect(await resolver.main()).toBe(commonMockResourceData);
        });
    });
});