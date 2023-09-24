/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonFindAttachmentFamilyResourceHandler, CommonFindAttachmentFamilyResourceResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceResolver', () =>
{
    let resolver: CommonFindAttachmentFamilyResourceResolver;
    let handler: CommonFindAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonFindAttachmentFamilyResourceResolver,
                {
                    provide : CommonFindAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonFindAttachmentFamilyResourceResolver>(CommonFindAttachmentFamilyResourceResolver);
        handler = module.get<CommonFindAttachmentFamilyResourceHandler>(CommonFindAttachmentFamilyResourceHandler);
    });

    test('CommonFindAttachmentFamilyResourceResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a attachmentFamilyResource', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main()).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
