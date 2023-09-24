/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDeleteAttachmentFamilyResourceByIdHandler, CommonDeleteAttachmentFamilyResourceByIdResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamilyResourceByIdResolver', () =>
{
    let resolver: CommonDeleteAttachmentFamilyResourceByIdResolver;
    let handler: CommonDeleteAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonDeleteAttachmentFamilyResourceByIdResolver,
                {
                    provide : CommonDeleteAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonDeleteAttachmentFamilyResourceByIdResolver>(CommonDeleteAttachmentFamilyResourceByIdResolver);
        handler = module.get<CommonDeleteAttachmentFamilyResourceByIdHandler>(CommonDeleteAttachmentFamilyResourceByIdHandler);
    });

    test('CommonDeleteAttachmentFamilyResourceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyResourceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an attachmentFamilyResource deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(commonMockAttachmentFamilyResourceData[0].id)).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
