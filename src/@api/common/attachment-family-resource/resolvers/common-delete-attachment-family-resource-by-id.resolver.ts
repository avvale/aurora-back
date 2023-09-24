import { CommonDeleteAttachmentFamilyResourceByIdHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.delete')
export class CommonDeleteAttachmentFamilyResourceByIdResolver
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamilyResourceByIdHandler,
    ) {}

    @Mutation('commonDeleteAttachmentFamilyResourceById')
    async main(
        @Args('attachmentFamilyId') attachmentFamilyId: string,
        @Args('resourceId') resourceId: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            attachmentFamilyId,
            resourceId,
            constraint,
            timezone,
            auditing,
        );
    }
}
