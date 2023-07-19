import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonCreateResourcesHandler } from '../handlers/common-create-resources.handler';
import { CommonCreateResourceInput } from '@api/graphql';

@Resolver()
@Auth('common.resource.create')
export class CommonCreateResourcesResolver
{
    constructor(
        private readonly handler: CommonCreateResourcesHandler,
    ) {}

    @Mutation('commonCreateResources')
    async main(
        @Args('payload') payload: CommonCreateResourceInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}