import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonFindAttachmentFamilyHandler } from '../handlers/common-find-attachment-family.handler';
import { CommonAttachmentFamily } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.get')
export class CommonFindAttachmentFamilyResolver
{
    constructor(
        private readonly handler: CommonFindAttachmentFamilyHandler,
    ) {}

    @Query('commonFindAttachmentFamily')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonAttachmentFamily>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}