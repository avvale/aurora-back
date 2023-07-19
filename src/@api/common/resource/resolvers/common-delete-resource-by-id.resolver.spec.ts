/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { CommonDeleteResourceByIdResolver } from './common-delete-resource-by-id.resolver';
import { CommonDeleteResourceByIdHandler } from '../handlers/common-delete-resource-by-id.handler';

// sources
import { commonMockResourceData } from '@app/common/resource/infrastructure/mock/common-mock-resource.data';

describe('CommonDeleteResourceByIdResolver', () =>
{
    let resolver: CommonDeleteResourceByIdResolver;
    let handler: CommonDeleteResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteResourceByIdResolver,
                {
                    provide : CommonDeleteResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteResourceByIdResolver>(CommonDeleteResourceByIdResolver);
        handler = module.get<CommonDeleteResourceByIdHandler>(CommonDeleteResourceByIdHandler);
    });

    test('CommonDeleteResourceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteResourceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an resource deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockResourceData[0])));
            expect(await resolver.main(commonMockResourceData[0].id)).toBe(commonMockResourceData[0]);
        });
    });
});