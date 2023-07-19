import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonDeleteResourcesHandler } from '../handlers/common-delete-resources.handler';
import { CommonResource } from '@api/graphql';

@Resolver()
@Auth('common.resource.delete')
export class CommonDeleteResourcesResolver
{
    constructor(
        private readonly handler: CommonDeleteResourcesHandler,
    ) {}

    @Mutation('commonDeleteResources')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonResource[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}