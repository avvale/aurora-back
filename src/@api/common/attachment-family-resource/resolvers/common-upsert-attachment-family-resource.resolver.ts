import { CommonUpsertAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamilyResourceByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.upsert')
export class CommonUpsertAttachmentFamilyResourceResolver
{
    constructor(
        private readonly handler: CommonUpsertAttachmentFamilyResourceHandler,
    ) {}

    @Mutation('commonUpsertAttachmentFamilyResource')
    async main(
        @Args('payload') payload: CommonUpdateAttachmentFamilyResourceByIdInput,
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
