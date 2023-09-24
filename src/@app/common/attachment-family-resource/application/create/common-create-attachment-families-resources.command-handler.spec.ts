import { CommonCreateAttachmentFamiliesResourcesCommand, commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { CommonCreateAttachmentFamiliesResourcesCommandHandler } from '@app/common/attachment-family-resource/application/create/common-create-attachment-families-resources.command-handler';
import { CommonCreateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/create/common-create-attachment-families-resources.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('commonCreateAttachmentFamiliesResourcesCommandHandler', () =>
{
    let commandHandler: CommonCreateAttachmentFamiliesResourcesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamiliesResourcesCommandHandler,
                {
                    provide : CommonCreateAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonCreateAttachmentFamiliesResourcesCommandHandler>(CommonCreateAttachmentFamiliesResourcesCommandHandler);
    });

    describe('main', () =>
    {
        test('CommonCreateAttachmentFamiliesResourcesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return CommonMockAttachmentFamilyResourceData created', async () =>
        {
            expect(await commandHandler.execute(
                new CommonCreateAttachmentFamiliesResourcesCommand(
                    commonMockAttachmentFamilyResourceData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
