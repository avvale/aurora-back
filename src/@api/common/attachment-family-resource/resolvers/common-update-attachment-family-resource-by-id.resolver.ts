import { CommonUpdateAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.update')
export class CommonUpdateAttachmentFamilyResourceByIdResolver
{
    constructor(
        private readonly handler: CommonUpdateAttachmentFamilyResourceByIdHandler,
    ) {}

    @Mutation('commonUpdateAttachmentFamilyResourceById')
    async main(
        @Args('payload') payload: CommonUpdateAttachmentFamilyResourceByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
