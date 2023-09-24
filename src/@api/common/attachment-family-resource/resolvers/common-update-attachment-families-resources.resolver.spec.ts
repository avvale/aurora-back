/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateAttachmentFamiliesResourcesHandler, CommonUpdateAttachmentFamiliesResourcesResolver } from '@api/common/attachment-family-resource';
import { CommonUpdateAttachmentFamiliesResourcesInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamiliesResourcesResolver', () =>
{
    let resolver: CommonUpdateAttachmentFamiliesResourcesResolver;
    let handler: CommonUpdateAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamiliesResourcesResolver,
                {
                    provide : CommonUpdateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpdateAttachmentFamiliesResourcesResolver>(CommonUpdateAttachmentFamiliesResourcesResolver);
        handler = module.get<CommonUpdateAttachmentFamiliesResourcesHandler>(CommonUpdateAttachmentFamiliesResourcesHandler);
    });

    test('CommonUpdateAttachmentFamiliesResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamiliesResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a attachmentFamiliesResources updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(<CommonUpdateAttachmentFamiliesResourcesInput>commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
