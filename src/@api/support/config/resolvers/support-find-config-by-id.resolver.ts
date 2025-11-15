import { SupportConfig } from '@api/graphql';
import { SupportFindConfigByIdHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.get')
export class SupportFindConfigByIdResolver {
    constructor(private readonly handler: SupportFindConfigByIdHandler) {}

    @Query('supportFindConfigById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SupportConfig> {
        return await this.handler.main(id, constraint, timezone);
    }
}
