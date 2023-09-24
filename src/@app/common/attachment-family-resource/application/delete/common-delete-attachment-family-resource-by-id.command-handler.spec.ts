import { CommonDeleteAttachmentFamilyResourceByIdCommand, commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';
import { CommonDeleteAttachmentFamilyResourceByIdCommandHandler } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-family-resource-by-id.command-handler';
import { CommonDeleteAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/delete/common-delete-attachment-family-resource-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonDeleteAttachmentFamilyResourceByIdCommandHandler', () =>
{
    let commandHandler: CommonDeleteAttachmentFamilyResourceByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommonDeleteAttachmentFamilyResourceByIdCommandHandler,
                {
                    provide : CommonDeleteAttachmentFamilyResourceByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CommonDeleteAttachmentFamilyResourceByIdCommandHandler>(CommonDeleteAttachmentFamilyResourceByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('CommonDeleteAttachmentFamilyResourceByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the CommonDeleteAttachmentFamilyResourceByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new CommonDeleteAttachmentFamilyResourceByIdCommand(
                    commonMockAttachmentFamilyResourceData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
