import { CommonCreateAttachmentFamiliesResourcesHandler, CommonCreateAttachmentFamiliesResourcesResolver } from '@api/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamiliesResourcesResolver', () =>
{
    let resolver: CommonCreateAttachmentFamiliesResourcesResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamiliesResourcesResolver,
                {
                    provide : CommonCreateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateAttachmentFamiliesResourcesResolver>(CommonCreateAttachmentFamiliesResourcesResolver);
    });

    test('CommonCreateAttachmentFamiliesResourcesResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesResourcesResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamiliesResources created', async () =>
        {
            expect(await resolver.main(<CommonCreateAttachmentFamilyResourceInput[]>commonMockAttachmentFamilyResourceData)).toBe(undefined);
        });
    });
});
