import { SearchEngineField, SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { SearchEngineUpsertFieldHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.upsert')
export class SearchEngineUpsertFieldResolver
{
    constructor(
        private readonly handler: SearchEngineUpsertFieldHandler,
    ) {}

    @Mutation('searchEngineUpsertField')
    async main(
        @Args('payload') payload: SearchEngineUpdateFieldByIdInput,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
