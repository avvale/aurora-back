/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUpdateAttachmentFamilyResourceByIdHandler, CommonUpdateAttachmentFamilyResourceByIdResolver } from '@api/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyResourceByIdResolver', () =>
{
    let resolver: CommonUpdateAttachmentFamilyResourceByIdResolver;
    let handler: CommonUpdateAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUpdateAttachmentFamilyResourceByIdResolver,
                {
                    provide : CommonUpdateAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUpdateAttachmentFamilyResourceByIdResolver>(CommonUpdateAttachmentFamilyResourceByIdResolver);
        handler = module.get<CommonUpdateAttachmentFamilyResourceByIdHandler>(CommonUpdateAttachmentFamilyResourceByIdHandler);
    });

    test('CommonUpdateAttachmentFamilyResourceByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyResourceByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a attachmentFamilyResource by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await resolver.main(<CommonUpdateAttachmentFamilyResourceByIdInput>commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
