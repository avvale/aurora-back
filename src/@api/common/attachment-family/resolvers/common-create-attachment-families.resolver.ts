import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonCreateAttachmentFamiliesHandler } from '../handlers/common-create-attachment-families.handler';
import { CommonCreateAttachmentFamilyInput } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.create')
export class CommonCreateAttachmentFamiliesResolver
{
    constructor(
        private readonly handler: CommonCreateAttachmentFamiliesHandler,
    ) {}

    @Mutation('commonCreateAttachmentFamilies')
    async main(
        @Args('payload') payload: CommonCreateAttachmentFamilyInput[],
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