/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonFindResourceResolver } from './common-find-resource.resolver';
import { CommonFindResourceHandler } from '../handlers/common-find-resource.handler';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonFindResourceResolver', () =>
{
    let resolver: CommonFindResourceResolver;
    let handler: CommonFindResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonFindResourceResolver,
                {
                    provide : CommonFindResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonFindResourceResolver>(CommonFindResourceResolver);
        handler = module.get<CommonFindResourceHandler>(CommonFindResourceHandler);
    });

    test('CommonFindResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonFindResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a resource', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData[0])));
            expect(await resolver.main()).toBe(commonMockResourceData[0]);
        });
    });
});