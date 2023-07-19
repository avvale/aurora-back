import { CommonCreateAttachmentFamiliesController, CommonCreateAttachmentFamiliesHandler } from '@api/common/attachment-family';
import { commonMockAttachmentFamilyData } from '@app/common/attachment-family';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamiliesController', () =>
{
    let controller: CommonCreateAttachmentFamiliesController;
    let handler: CommonCreateAttachmentFamiliesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                CommonCreateAttachmentFamiliesController,
            ],
            providers: [
                {
                    provide : CommonCreateAttachmentFamiliesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonCreateAttachmentFamiliesController>(CommonCreateAttachmentFamiliesController);
        handler = module.get<CommonCreateAttachmentFamiliesHandler>(CommonCreateAttachmentFamiliesHandler);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyData created', async () =>
        {
            expect(await controller.main(commonMockAttachmentFamilyData)).toBe(undefined);
        });
    });
});