import { CommonDeleteAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.delete')
export class CommonDeleteAttachmentFamiliesResourcesResolver
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamiliesResourcesHandler,
    ) {}

    @Mutation('commonDeleteAttachmentFamiliesResources')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
