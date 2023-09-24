import { CommonCreateAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.create')
export class CommonCreateAttachmentFamilyResourceResolver
{
    constructor(
        private readonly handler: CommonCreateAttachmentFamilyResourceHandler,
    ) {}

    @Mutation('commonCreateAttachmentFamilyResource')
    async main(
        @Args('payload') payload: CommonCreateAttachmentFamilyResourceInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
