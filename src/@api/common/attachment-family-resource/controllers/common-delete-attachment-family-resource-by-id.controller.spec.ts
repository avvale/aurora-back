/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonDeleteAttachmentFamilyResourceByIdController, CommonDeleteAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamilyResourceByIdController', () =>
{
    let controller: CommonDeleteAttachmentFamilyResourceByIdController;
    let handler: CommonDeleteAttachmentFamilyResourceByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonDeleteAttachmentFamilyResourceByIdController,
            ],
            providers: [
                {
                    provide : CommonDeleteAttachmentFamilyResourceByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonDeleteAttachmentFamilyResourceByIdController>(CommonDeleteAttachmentFamilyResourceByIdController);
        handler = module.get<CommonDeleteAttachmentFamilyResourceByIdHandler>(CommonDeleteAttachmentFamilyResourceByIdHandler);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyResourceByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an attachmentFamilyResource deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(commonMockAttachmentFamilyResourceData[0])));
            expect(await controller.main(commonMockAttachmentFamilyResourceData[0].id)).toBe(commonMockAttachmentFamilyResourceData[0]);
        });
    });
});
