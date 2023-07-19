import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { CommonDeleteResourceByIdHandler } from '../handlers/common-delete-resource-by-id.handler';
import { CommonResource } from '@api/graphql';

@Resolver()
@Auth('common.resource.delete')
export class CommonDeleteResourceByIdResolver
{
    constructor(
        private readonly handler: CommonDeleteResourceByIdHandler,
    ) {}

    @Mutation('commonDeleteResourceById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonResource>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}