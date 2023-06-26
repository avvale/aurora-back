import { SearchEngineCreateFieldHandler } from '../handlers/search-engine-create-field.handler';
import { SearchEngineCreateFieldInput, SearchEngineField } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.create')
export class SearchEngineCreateFieldResolver
{
    constructor(
        private readonly handler: SearchEngineCreateFieldHandler,
    ) {}

    @Mutation('searchEngineCreateField')
    async main(
        @Args('payload') payload: SearchEngineCreateFieldInput,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}