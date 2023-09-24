/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpsertAttachmentFamilyResourceHandler, CommonUpsertAttachmentFamilyResourceResolver } from '@api/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpsertAttachmentFamilyResourceResolver', () =>
{
    let resolver: CommonUpsertAttachmentFamilyResourceResolver;
    let handler: CommonUpsertAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpsertAttachmentFamilyResourceResolver,
                {
                    provide : CommonUpsertAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpsertAttachmentFamilyResourceResolver>(CommonUpsertAttachmentFamilyResourceResolver);
        handler = module.get<CommonUpsertAttachmentFamilyResourceHandler>(CommonUpsertAttachmentFamilyResourceHandler);
    });

    test('CommonUpsertAttachmentFamilyResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpsertAttachmentFamilyResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamilyResource upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(<CommonUpdateAttachmentFamilyResourceByIdInput>commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
