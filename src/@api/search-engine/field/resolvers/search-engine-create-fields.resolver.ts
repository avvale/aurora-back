import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineCreateFieldsHandler } from '../handlers/search-engine-create-fields.handler';
import { SearchEngineCreateFieldInput } from '@api/graphql';

@Resolver()
@Auth('searchEngine.field.create')
export class SearchEngineCreateFieldsResolver
{
    constructor(
        private readonly handler: SearchEngineCreateFieldsHandler,
    ) {}

    @Mutation('searchEngineCreateFields')
    async main(
        @Args('payload') payload: SearchEngineCreateFieldInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}