import { CommonCropAttachmentHandler } from '@api/common/attachment';
import { CommonCropAndCreateAttachmentInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
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
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
