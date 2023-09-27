/* eslint-disable @typescript-eslint/no-unused-vars */
import { CommonUploadAttachmentHandler } from '../handlers/common-upload-attachment.handler';
import { CommonUploadAttachmentResolver } from './common-upload-attachment.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('CommonUploadAttachmentResolver', () =>
{
    let resolver: CommonUploadAttachmentResolver;
    let handler: CommonUploadAttachmentHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                CommonUploadAttachmentResolver,
                {
                    provide : CommonUploadAttachmentHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<CommonUploadAttachmentResolver>(CommonUploadAttachmentResolver);
        handler = module.get<CommonUploadAttachmentHandler>(CommonUploadAttachmentHandler);
    });

    test('CommonUploadAttachmentResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('CommonUploadAttachmentResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });
    });
});