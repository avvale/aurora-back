import { SearchEngineField, SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { SearchEngineUpdateFieldByIdHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.update')
export class SearchEngineUpdateFieldByIdResolver
{
    constructor(
        private readonly handler: SearchEngineUpdateFieldByIdHandler,
    ) {}

    @Mutation('searchEngineUpdateFieldById')
    async main(
        @Args('payload') payload: SearchEngineUpdateFieldByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
