import { CommonCreateAttachmentFamiliesResourcesController, CommonCreateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamiliesResourcesController', () =>
{
    let controller: CommonCreateAttachmentFamiliesResourcesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                CommonCreateAttachmentFamiliesResourcesController,
            ],
            providers: [
                {
                    provide : CommonCreateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonCreateAttachmentFamiliesResourcesController>(CommonCreateAttachmentFamiliesResourcesController);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesResourcesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyResourceData created', async () =>
        {
            expect(
                await controller.main(
                    commonMockAttachmentFamilyResourceData,
                ),
            )
                .toBe(undefined);
        });
    });
});
