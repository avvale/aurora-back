import { CommonCropAttachmentHandler } from '@api/common/attachment';
import { CommonCropAndCreateAttachmentInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachment.create')
export class CommonCropAttachmentResolver
{
    constructor(
        private readonly handler: CommonCropAttachmentHandler,
    ) {}

    @Mutation('commonCropAndCreateAttachment')
    async main(
        @Args('payload') payload: CommonCropAndCreateAttachmentInput,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
        );
    }
}
