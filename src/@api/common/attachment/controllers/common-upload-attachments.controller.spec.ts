/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUploadAttachmentHandler } from '../handlers/common-upload-attachments.handler';
import { CommonUploadAttachmentController } from './common-upload-attachments.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUploadAttachmentsController', () =>
{
    let controller: CommonUploadAttachmentController;
    let handler: CommonUploadAttachmentHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                CommonUploadAttachmentController,
            ],
            providers: [
                {
                    provide : CommonUploadAttachmentHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<CommonUploadAttachmentController>(CommonUploadAttachmentController);
        handler = module.get<CommonUploadAttachmentHandler>(CommonUploadAttachmentHandler);
    });

    describe('main', () =>
    {
        test('CommonUploadAttachmentController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});