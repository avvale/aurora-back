import { CommonFindAttachmentFamilyResourceHandler } from '@api/common/attachment-family-resource';
import { CommonAttachmentFamilyResource } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.get')
export class CommonFindAttachmentFamilyResourceResolver
{
    constructor(
        private readonly handler: CommonFindAttachmentFamilyResourceHandler,
    ) {}

    @Query('commonFindAttachmentFamilyResource')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<CommonAttachmentFamilyResource>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
