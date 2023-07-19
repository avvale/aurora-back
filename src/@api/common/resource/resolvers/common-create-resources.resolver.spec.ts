import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonCreateResourcesResolver } from './common-create-resources.resolver';
import { CommonCreateResourcesHandler } from '../handlers/common-create-resources.handler';
import { CommonCreateResourceInput } from '@api/graphql';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonCreateResourcesResolver', () =>
{
    let resolver: CommonCreateResourcesResolver;
    let handler: CommonCreateResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateResourcesResolver,
                {
                    provide : CommonCreateResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateResourcesResolver>(CommonCreateResourcesResolver);
        handler = module.get<CommonCreateResourcesHandler>(CommonCreateResourcesHandler);
    });

    test('CommonCreateResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an resources created', async () =>
        {
            expect(await resolver.main(<CommonCreateResourceInput[]>commonMockResourceData)).toBe(undefined);
        });
    });
});