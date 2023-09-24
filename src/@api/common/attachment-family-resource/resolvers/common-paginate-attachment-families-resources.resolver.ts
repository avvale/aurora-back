import { CommonPaginateAttachmentFamiliesResourcesHandler } from '@api/common/attachment-family-resource';
import { Pagination } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('common.attachmentFamilyResource.get')
export class CommonPaginateAttachmentFamiliesResourcesResolver
{
    constructor(
        private readonly handler: CommonPaginateAttachmentFamiliesResourcesHandler,
    ) {}

    @Query('commonPaginateAttachmentFamiliesResources')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
