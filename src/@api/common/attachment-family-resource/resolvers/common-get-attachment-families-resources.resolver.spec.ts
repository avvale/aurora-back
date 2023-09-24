/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonGetAttachmentFamiliesResourcesHandler, CommonGetAttachmentFamiliesResourcesResolver } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonGetAttachmentFamiliesResourcesResolver', () =>
{
    let resolver: CommonGetAttachmentFamiliesResourcesResolver;
    let handler: CommonGetAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonGetAttachmentFamiliesResourcesResolver,
                {
                    provide : CommonGetAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonGetAttachmentFamiliesResourcesResolver>(CommonGetAttachmentFamiliesResourcesResolver);
        handler = module.get<CommonGetAttachmentFamiliesResourcesHandler>(CommonGetAttachmentFamiliesResourcesHandler);
    });

    test('CommonGetAttachmentFamiliesResourcesResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonGetAttachmentFamiliesResourcesResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData)));
            expect(await resolver.main()).toBe(commonMockAttachmentFamilyResourceData);
        });
    });
});
