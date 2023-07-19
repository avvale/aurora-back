import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonPaginateAttachmentFamiliesHandler } from '../handlers/common-paginate-attachment-families.handler';
import { Pagination } from '@api/graphql';

@Resolver()
@Auth('common.attachmentFamily.get')
export class CommonPaginateAttachmentFamiliesResolver
{
    constructor(
        private readonly handler: CommonPaginateAttachmentFamiliesHandler,
    ) {}

    @Query('commonPaginateAttachmentFamilies')
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