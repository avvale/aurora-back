/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonCreateResourceResolver } from './common-create-resource.resolver';
import { CommonCreateResourceHandler } from '../handlers/common-create-resource.handler';
import { CommonCreateResourceInput } from '@api/graphql';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonCreateResourceResolver', () =>
{
    let resolver: CommonCreateResourceResolver;
    let handler: CommonCreateResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonCreateResourceResolver,
                {
                    provide : CommonCreateResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateResourceResolver>(CommonCreateResourceResolver);
        handler = module.get<CommonCreateResourceHandler>(CommonCreateResourceHandler);
    });

    test('CommonCreateResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an resource created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData[0])));
            expect(await resolver.main(<CommonCreateResourceInput>commonMockResourceData[0])).toBe(commonMockResourceData[0]);
        });
    });
});