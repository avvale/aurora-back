import { SearchEngineUpsertFieldHandler } from '../handlers/search-engine-upsert-field.handler';
import { SearchEngineField, SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
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