/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonPaginateAttachmentFamiliesResourcesHandler, CommonPaginateAttachmentFamiliesResourcesResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesResourcesResolver', () =>
{
    let resolver: CommonPaginateAttachmentFamiliesResourcesResolver;
    let handler: CommonPaginateAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonPaginateAttachmentFamiliesResourcesResolver,
                {
                    provide : CommonPaginateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonPaginateAttachmentFamiliesResourcesResolver>(CommonPaginateAttachmentFamiliesResourcesResolver);
        handler = module.get<CommonPaginateAttachmentFamiliesResourcesHandler>(CommonPaginateAttachmentFamiliesResourcesHandler);
    });

    test('CommonPaginateAttachmentFamiliesResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : commonMockAttachmentFamilyResourceData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : commonMockAttachmentFamilyResourceData,
            });
        });
    });
});
