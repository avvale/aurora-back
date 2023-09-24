import { CommonUpdateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource, CommonUpdateAttachmentFamiliesResourcesInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.update')
export class CommonUpdateAttachmentFamiliesResourcesResolver
{
    constructor(
        private readonly handler: CommonUpdateAttachmentFamiliesResourcesHandler,
    ) {}

    @Mutation('commonUpdateAttachmentFamiliesResources')
    async main(
        @Args('payload') payload: CommonUpdateAttachmentFamiliesResourcesInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
