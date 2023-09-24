import { CommonCreateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.create')
export class CommonCreateAttachmentFamiliesResourcesResolver
{
    constructor(
        private readonly handler: CommonCreateAttachmentFamiliesResourcesHandler,
    ) {}

    @Mutation('commonCreateAttachmentFamiliesResources')
    async main(
        @Args('payload') payload: CommonCreateAttachmentFamilyResourceInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
