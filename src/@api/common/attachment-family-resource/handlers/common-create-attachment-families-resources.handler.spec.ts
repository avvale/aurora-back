import { CommonCreateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamiliesResourcesHandler', () =>
{
    let handler: CommonCreateAttachmentFamiliesResourcesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamiliesResourcesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<CommonCreateAttachmentFamiliesResourcesHandler>(CommonCreateAttachmentFamiliesResourcesHandler);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesResourcesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an commonMockAttachmentFamilyResourceData created', async () =>
        {
            expect(await handler.main(commonMockAttachmentFamilyResourceData)).toBe(true);
        });
    });
});
