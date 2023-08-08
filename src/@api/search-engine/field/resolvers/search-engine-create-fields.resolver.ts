import { SearchEngineCreateFieldInput } from '@api/graphql';
import { SearchEngineCreateFieldsHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

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
