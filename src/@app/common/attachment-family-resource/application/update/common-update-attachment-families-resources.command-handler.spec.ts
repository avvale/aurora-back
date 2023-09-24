import { commonMockAttachmentFamilyResourceData, CommonUpdateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamiliesResourcesCommandHandler } from '@app/common/attachment-family-resource/application/update/common-update-attachment-families-resources.command-handler';
import { CommonUpdateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-families-resources.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamiliesResourcesCommandHandler', () =>
{
    let commandHandler: CommonUpdateAttachmentFamiliesResourcesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonUpdateAttachmentFamiliesResourcesCommandHandler,
                {
                    provide : CommonUpdateAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonUpdateAttachmentFamiliesResourcesCommandHandler>(CommonUpdateAttachmentFamiliesResourcesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAttachmentFamiliesResourcesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an attachmentFamiliesResources updated', async () =>
        {
            expect(await commandHandler.execute(
                new CommonUpdateAttachmentFamiliesResourcesCommand(
                    {
                        attachmentFamilyId: commonMockAttachmentFamilyResourceData[0].attachmentFamilyId,
                        resourceId: commonMockAttachmentFamilyResourceData[0].resourceId,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
