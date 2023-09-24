import { commonMockAttachmentFamilyResourceData, CommonUpdateAttachmentFamilyResourceByIdCommand } from '@app/common/attachment-family-resource';
import { CommonUpdateAttachmentFamilyResourceByIdCommandHandler } from '@app/common/attachment-family-resource/application/update/common-update-attachment-family-resource-by-id.command-handler';
import { CommonUpdateAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/update/common-update-attachment-family-resource-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpdateAttachmentFamilyResourceByIdCommandHandler', () =>
{
    let commandHandler: CommonUpdateAttachmentFamilyResourceByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonUpdateAttachmentFamilyResourceByIdCommandHandler,
                {
                    provide : CommonUpdateAttachmentFamilyResourceByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonUpdateAttachmentFamilyResourceByIdCommandHandler>(CommonUpdateAttachmentFamilyResourceByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAttachmentFamilyResourceByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an attachmentFamilyResource created', async () =>
        {
            expect(await commandHandler.execute(
                new CommonUpdateAttachmentFamilyResourceByIdCommand(
                    {
                        attachmentFamilyId: commonMockAttachmentFamilyResourceData[0].attachmentFamilyId,
                        resourceId: commonMockAttachmentFamilyResourceData[0].resourceId,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
