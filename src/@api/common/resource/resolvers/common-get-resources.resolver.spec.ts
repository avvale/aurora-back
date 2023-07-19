/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonGetResourcesResolver } from './common-get-resources.resolver';
import { CommonGetResourcesHandler } from '../handlers/common-get-resources.handler';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonGetResourcesResolver', () =>
{
    let resolver: CommonGetResourcesResolver;
    let handler: CommonGetResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonGetResourcesResolver,
                {
                    provide : CommonGetResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonGetResourcesResolver>(CommonGetResourcesResolver);
        handler = module.get<CommonGetResourcesHandler>(CommonGetResourcesHandler);
    });

    test('CommonGetResourcesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonGetResourcesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a commonMockResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData)));
            expect(await resolver.main()).toBe(commonMockResourceData);
        });
    });
});