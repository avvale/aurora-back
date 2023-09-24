import { CommonUpdateAttachmentFamiliesResourcesController, CommonUpdateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamiliesResourcesController', () =>
{
    let controller: CommonUpdateAttachmentFamiliesResourcesController;
    let handler: CommonUpdateAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonUpdateAttachmentFamiliesResourcesController,
            ],
            providers: [
                {
                    provide : CommonUpdateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonUpdateAttachmentFamiliesResourcesController>(CommonUpdateAttachmentFamiliesResourcesController);
        handler = module.get<CommonUpdateAttachmentFamiliesResourcesHandler>(CommonUpdateAttachmentFamiliesResourcesHandler);
    });

    describe('main', () =>
    {
        test('CommonUpdateAttachmentFamiliesResourcesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a attachmentFamiliesResources updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main(commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
