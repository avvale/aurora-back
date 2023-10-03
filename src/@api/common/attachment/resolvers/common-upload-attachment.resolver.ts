import { CommonUploadAttachmentHandler } from '@api/common/attachment';
import { CoreFile, CoreFileUploaded } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachment.upload')
export class CommonUploadAttachmentResolver
{
    constructor(
        private readonly handler: CommonUploadAttachmentHandler,
    ) {}

    @Mutation('commonUploadAttachment')
    async main(
        @Args('files') files: CoreFileUploaded[],
    ): Promise<CoreFile[]>
    {
        return await this.handler.main(
            files,
        );
    }
}
