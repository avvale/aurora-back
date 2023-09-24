import { CommonFindAttachmentFamilyResourceController, CommonFindAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceController', () =>
{
    let controller: CommonFindAttachmentFamilyResourceController;
    let handler: CommonFindAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonFindAttachmentFamilyResourceController,
            ],
            providers: [
                {
                    provide : CommonFindAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonFindAttachmentFamilyResourceController>(CommonFindAttachmentFamilyResourceController);
        handler = module.get<CommonFindAttachmentFamilyResourceHandler>(CommonFindAttachmentFamilyResourceHandler);
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a attachmentFamilyResource', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main()).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
