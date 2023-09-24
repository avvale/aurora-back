import { CommonGetAttachmentFamiliesResourcesController, CommonGetAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonGetAttachmentFamiliesResourcesController', () =>
{
    let controller: CommonGetAttachmentFamiliesResourcesController;
    let handler: CommonGetAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonGetAttachmentFamiliesResourcesController,
            ],
            providers: [
                {
                    provide : CommonGetAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonGetAttachmentFamiliesResourcesController>(CommonGetAttachmentFamiliesResourcesController);
        handler = module.get<CommonGetAttachmentFamiliesResourcesHandler>(CommonGetAttachmentFamiliesResourcesHandler);
    });

    describe('main', () =>
    {
        test('CommonGetAttachmentFamiliesResourcesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData)));
            expect(await controller.main()).toBe(commonMockAttachmentFamilyResourceData);
        });
    });
});
