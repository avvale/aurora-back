import { Pagination } from '@api/graphql';
import { SupportPaginateConfigsHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.get')
export class SupportPaginateConfigsResolver {
    constructor(private readonly handler: SupportPaginateConfigsHandler) {}

    @Query('supportPaginateConfigs')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination> {
        return await this.handler.main(queryStatement, constraint, timezone);
    }
}
