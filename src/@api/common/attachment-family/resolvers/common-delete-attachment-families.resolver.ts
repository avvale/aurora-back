import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonDeleteAttachmentFamiliesHandler } from '../handlers/common-delete-attachment-families.handler';
import { CommonAttachmentFamily } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.delete')
export class CommonDeleteAttachmentFamiliesResolver
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamiliesHandler,
    ) {}

    @Mutation('commonDeleteAttachmentFamilies')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamily[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}