import { SupportConfig, SupportCreateConfigInput } from '@api/graphql';
import { SupportCreateConfigHandler } from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.config.create')
export class SupportCreateConfigResolver {
    constructor(private readonly handler: SupportCreateConfigHandler) {}

    @Mutation('supportCreateConfig')
    async main(
        @Args('payload') payload: SupportCreateConfigInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<SupportConfig> {
        return await this.handler.main(payload, timezone, auditing);
    }
}
