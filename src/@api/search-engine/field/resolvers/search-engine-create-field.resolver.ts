import { SearchEngineCreateFieldInput, SearchEngineField } from '@api/graphql';
import { SearchEngineCreateFieldHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
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
