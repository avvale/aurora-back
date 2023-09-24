import { CommonFindAttachmentFamilyResourceByIdController, CommonFindAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonFindAttachmentFamilyResourceByIdController', () =>
{
    let controller: CommonFindAttachmentFamilyResourceByIdController;
    let handler: CommonFindAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonFindAttachmentFamilyResourceByIdController,
            ],
            providers: [
                {
                    provide : CommonFindAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonFindAttachmentFamilyResourceByIdController>(CommonFindAttachmentFamilyResourceByIdController);
        handler = module.get<CommonFindAttachmentFamilyResourceByIdHandler>(CommonFindAttachmentFamilyResourceByIdHandler);
    });

    describe('main', () =>
    {
        test('CommonFindAttachmentFamilyResourceByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an attachmentFamilyResource by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main(commonMockAttachmentFamilyResourceData[0].id)).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
