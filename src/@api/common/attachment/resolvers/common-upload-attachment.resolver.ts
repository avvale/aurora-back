import { CommonUploadAttachmentHandler } from '@api/common/attachment';
import { CommonUpdateAttachmentByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachment.update')
export class CommonUploadAttachmentResolver
{
    constructor(
        private readonly handler: CommonUploadAttachmentHandler,
    ) {}

    @Mutation('commonUploadAttachment')
    async main(
        @Args('payload') payload: CommonUpdateAttachmentByIdInput,
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
