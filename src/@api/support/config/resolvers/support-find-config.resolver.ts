import { SupportConfig } from '@api/graphql';
import { SupportFindConfigHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.get')
export class SupportFindConfigResolver {
    constructor(private readonly handler: SupportFindConfigHandler) {}

    @Query('supportFindConfig')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SupportConfig> {
        return await this.handler.main(queryStatement, constraint, timezone);
    }
}
