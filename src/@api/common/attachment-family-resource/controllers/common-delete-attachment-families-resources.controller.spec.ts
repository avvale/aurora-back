import { CommonDeleteAttachmentFamiliesResourcesController, CommonDeleteAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamiliesResourcesController', () =>
{
    let controller: CommonDeleteAttachmentFamiliesResourcesController;
    let handler: CommonDeleteAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonDeleteAttachmentFamiliesResourcesController,
            ],
            providers: [
                {
                    provide : CommonDeleteAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonDeleteAttachmentFamiliesResourcesController>(CommonDeleteAttachmentFamiliesResourcesController);
        handler = module.get<CommonDeleteAttachmentFamiliesResourcesHandler>(CommonDeleteAttachmentFamiliesResourcesHandler);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamiliesResourcesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyResourceData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData)));
            expect(await controller.main()).toBe(commonMockAttachmentFamilyResourceData);
        });
    });
});
