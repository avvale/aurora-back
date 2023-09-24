import { CommonPaginateAttachmentFamiliesResourcesController, CommonPaginateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonPaginateAttachmentFamiliesResourcesController', () =>
{
    let controller: CommonPaginateAttachmentFamiliesResourcesController;
    let handler: CommonPaginateAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonPaginateAttachmentFamiliesResourcesController,
            ],
            providers: [
                {
                    provide : CommonPaginateAttachmentFamiliesResourcesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonPaginateAttachmentFamiliesResourcesController>(CommonPaginateAttachmentFamiliesResourcesController);
        handler = module.get<CommonPaginateAttachmentFamiliesResourcesHandler>(CommonPaginateAttachmentFamiliesResourcesHandler);
    });

    describe('main', () =>
    {
        test('CommonPaginateAttachmentFamiliesResourcesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a commonMockAttachmentFamilyResourceData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : commonMockAttachmentFamilyResourceData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : commonMockAttachmentFamilyResourceData,
            });
        });
    });
});
