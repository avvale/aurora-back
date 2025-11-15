import { SupportConfig, SupportUpdateConfigByIdInput } from '@api/graphql';
import { SupportUpdateConfigByIdHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import {
    Auditing,
    AuditingMeta,
    QueryStatement,
    Timezone,
} from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.update')
export class SupportUpdateConfigByIdResolver {
    constructor(private readonly handler: SupportUpdateConfigByIdHandler) {}

    @Mutation('supportUpdateConfigById')
    async main(
        @Args('payload') payload: SupportUpdateConfigByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<SupportConfig> {
        return await this.handler.main(payload, constraint, timezone, auditing);
    }
}
