import { CommonDeleteAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { CommonDeleteAttachmentFamiliesResourcesCommandHandler } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-families-resources.command-handler';
import { CommonDeleteAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-families-resources.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamiliesResourcesCommandHandler', () =>
{
    let commandHandler: CommonDeleteAttachmentFamiliesResourcesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonDeleteAttachmentFamiliesResourcesCommandHandler,
                {
                    provide : CommonDeleteAttachmentFamiliesResourcesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonDeleteAttachmentFamiliesResourcesCommandHandler>(CommonDeleteAttachmentFamiliesResourcesCommandHandler);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamiliesResourcesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new CommonDeleteAttachmentFamiliesResourcesCommand(),
            )).toBe(undefined);
        });
    });
});
