import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonDeleteAttachmentFamilyByIdHandler } from '../handlers/common-delete-attachment-family-by-id.handler';
import { CommonAttachmentFamily } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.delete')
export class CommonDeleteAttachmentFamilyByIdResolver
{
    constructor(
        private readonly handler: CommonDeleteAttachmentFamilyByIdHandler,
    ) {}

    @Mutation('commonDeleteAttachmentFamilyById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonAttachmentFamily>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}