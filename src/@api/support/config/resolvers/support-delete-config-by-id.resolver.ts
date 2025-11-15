import { SupportConfig } from '@api/graphql';
import { SupportDeleteConfigByIdHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import {
    Auditing,
    AuditingMeta,
    QueryStatement,
    Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.delete')
export class SupportDeleteConfigByIdResolver {
    constructor(private readonly handler: SupportDeleteConfigByIdHandler) {}

    @Mutation('supportDeleteConfigById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<SupportConfig> {
        return await this.handler.main(id, constraint, timezone, auditing);
    }
}
