import { CommonCreateAttachmentFamilyResourceCommandHandler } from './common-create-attachment-family-resource.command-handler';
import { CommonCreateAttachmentFamilyResourceService } from './common-create-attachment-family-resource.service';
import { CommonCreateAttachmentFamilyResourceCommand, commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonCreateAttachmentFamilyResourceCommandHandler', () =>
{
    let commandHandler: CommonCreateAttachmentFamilyResourceCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonCreateAttachmentFamilyResourceCommandHandler,
                {
                    provide : CommonCreateAttachmentFamilyResourceService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonCreateAttachmentFamilyResourceCommandHandler>(CommonCreateAttachmentFamilyResourceCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateAttachmentFamilyResourceCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the CommonCreateAttachmentFamilyResourceService', async () =>
        {
            expect(await commandHandler.execute(
                new CommonCreateAttachmentFamilyResourceCommand(
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
