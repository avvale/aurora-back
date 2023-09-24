/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonCreateAttachmentFamilyResourceHandler, CommonCreateAttachmentFamilyResourceResolver } from '@api/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamilyResourceResolver', () =>
{
    let resolver: CommonCreateAttachmentFamilyResourceResolver;
    let handler: CommonCreateAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonCreateAttachmentFamilyResourceResolver,
                {
                    provide : CommonCreateAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonCreateAttachmentFamilyResourceResolver>(CommonCreateAttachmentFamilyResourceResolver);
        handler = module.get<CommonCreateAttachmentFamilyResourceHandler>(CommonCreateAttachmentFamilyResourceHandler);
    });

    test('CommonCreateAttachmentFamilyResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamilyResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamilyResource created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(<CommonCreateAttachmentFamilyResourceInput>commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
