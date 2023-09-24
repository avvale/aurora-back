/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonFindAttachmentFamilyResourceByIdHandler, CommonFindAttachmentFamilyResourceByIdResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceByIdResolver', () =>
{
    let resolver: CommonFindAttachmentFamilyResourceByIdResolver;
    let handler: CommonFindAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonFindAttachmentFamilyResourceByIdResolver,
                {
                    provide : CommonFindAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonFindAttachmentFamilyResourceByIdResolver>(CommonFindAttachmentFamilyResourceByIdResolver);
        handler = module.get<CommonFindAttachmentFamilyResourceByIdHandler>(CommonFindAttachmentFamilyResourceByIdHandler);
    });

    test('CommonFindAttachmentFamilyResourceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamilyResource by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(commonMockAttachmentFamilyResourceData[0].id)).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
