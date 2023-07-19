/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonUpsertResourceResolver } from './common-upsert-resource.resolver';
import { CommonUpsertResourceHandler } from '../handlers/common-upsert-resource.handler';
import { CommonUpdateResourceByIdInput } from '@api/graphql';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonUpsertResourceResolver', () =>
{
    let resolver: CommonUpsertResourceResolver;
    let handler: CommonUpsertResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpsertResourceResolver,
                {
                    provide : CommonUpsertResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpsertResourceResolver>(CommonUpsertResourceResolver);
        handler = module.get<CommonUpsertResourceHandler>(CommonUpsertResourceHandler);
    });

    test('CommonUpsertResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpsertResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an resource upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData[0])));
            expect(await resolver.main(<CommonUpdateResourceByIdInput>commonMockResourceData[0])).toBe(commonMockResourceData[0]);
        });
    });
});