import { CommonCreateAttachmentFamilyResourceController, CommonCreateAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamilyResourceController', () =>
{
    let controller: CommonCreateAttachmentFamilyResourceController;
    let handler: CommonCreateAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonCreateAttachmentFamilyResourceController,
            ],
            providers: [
                {
                    provide : CommonCreateAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonCreateAttachmentFamilyResourceController>(CommonCreateAttachmentFamilyResourceController);
        handler = module.get<CommonCreateAttachmentFamilyResourceHandler>(CommonCreateAttachmentFamilyResourceHandler);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamilyResourceController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an attachmentFamilyResource created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(
                await controller.main(
                    commonMockAttachmentFamilyResourceData[0],
                ),
            )
                .toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
