import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonGetAttachmentFamiliesHandler } from '../handlers/common-get-attachment-families.handler';
import { CommonAttachmentFamily } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.get')
export class CommonGetAttachmentFamiliesResolver
{
    constructor(
        private readonly handler: CommonGetAttachmentFamiliesHandler,
    ) {}

    @Query('commonGetAttachmentFamilies')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonAttachmentFamily[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}