import { CommonUpsertAttachmentFamilyResourceController, CommonUpsertAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpsertAttachmentFamilyResourceController', () =>
{
    let controller: CommonUpsertAttachmentFamilyResourceController;
    let handler: CommonUpsertAttachmentFamilyResourceHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonUpsertAttachmentFamilyResourceController,
            ],
            providers: [
                {
                    provide : CommonUpsertAttachmentFamilyResourceHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonUpsertAttachmentFamilyResourceController>(CommonUpsertAttachmentFamilyResourceController);
        handler = module.get<CommonUpsertAttachmentFamilyResourceHandler>(CommonUpsertAttachmentFamilyResourceHandler);
    });

    describe('main', () =>
    {
        test('CommonUpsertAttachmentFamilyResourceController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an attachmentFamilyResource upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main(commonMockAttachmentFamilyResourceData[0])).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
