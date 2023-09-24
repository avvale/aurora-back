import { commonMockAttachmentFamilyResourceData, CommonUpsertAttachmentFamilyResourceCommand } from '@app/common/attachment-family-resource';
import { CommonUpsertAttachmentFamilyResourceCommandHandler } from '@app/common/attachment-family-resource/application/upsert/common-upsert-attachment-family-resource.command-handler';
import { CommonUpsertAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/upsert/common-upsert-attachment-family-resource.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUpsertAttachmentFamilyResourceCommandHandler', () =>
{
    let commandHandler: CommonUpsertAttachmentFamilyResourceCommandHandler;
    let service: CommonUpsertAttachmentFamilyResourceService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonUpsertAttachmentFamilyResourceCommandHandler,
                {
                    provide : CommonUpsertAttachmentFamilyResourceService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonUpsertAttachmentFamilyResourceCommandHandler>(CommonUpsertAttachmentFamilyResourceCommandHandler);
        service = module.get<CommonUpsertAttachmentFamilyResourceService>(CommonUpsertAttachmentFamilyResourceService);
    });

    describe('main', () =>
    {
        test('UpsertAttachmentFamilyResourceCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the CommonUpsertAttachmentFamilyResourceService', async () =>
        {
            expect(await commandHandler.execute(
                new CommonUpsertAttachmentFamilyResourceCommand(
                    {
                        attachmentFamilyId: commonMockAttachmentFamilyResourceData[0].attachmentFamilyId,
                        resourceId: commonMockAttachmentFamilyResourceData[0].resourceId,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
