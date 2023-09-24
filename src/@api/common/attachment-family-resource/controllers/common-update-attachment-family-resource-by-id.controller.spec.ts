import { CommonUpdateAttachmentFamilyResourceByIdController, CommonUpdateAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyResourceByIdController', () =>
{
    let controller: CommonUpdateAttachmentFamilyResourceByIdController;
    let handler: CommonUpdateAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonUpdateAttachmentFamilyResourceByIdController,
            ],
            providers: [
                {
                    provide : CommonUpdateAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonUpdateAttachmentFamilyResourceByIdController>(CommonUpdateAttachmentFamilyResourceByIdController);
        handler = module.get<CommonUpdateAttachmentFamilyResourceByIdHandler>(CommonUpdateAttachmentFamilyResourceByIdHandler);
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamilyResourceByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a attachmentFamilyResource updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main(commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
