/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDeleteAttachmentFamiliesResourcesHandler, CommonDeleteAttachmentFamiliesResourcesResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamiliesResourcesResolver', () =>
{
    let resolver: CommonDeleteAttachmentFamiliesResourcesResolver;
    let handler: CommonDeleteAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteAttachmentFamiliesResourcesResolver,
                {
                    provide : CommonDeleteAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteAttachmentFamiliesResourcesResolver>(CommonDeleteAttachmentFamiliesResourcesResolver);
        handler = module.get<CommonDeleteAttachmentFamiliesResourcesHandler>(CommonDeleteAttachmentFamiliesResourcesHandler);
    });

    test('CommonDeleteAttachmentFamiliesResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamiliesResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyResourceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData)));
            expect(await resolver.main()).toBe(commonMockAttachmentFamilyResourceData);
        });
    });
});
