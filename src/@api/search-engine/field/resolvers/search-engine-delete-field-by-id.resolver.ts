import { SearchEngineField } from '@api/graphql';
import { SearchEngineDeleteFieldByIdHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldByIdResolver
{
    constructor(
        private readonly handler: SearchEngineDeleteFieldByIdHandler,
    ) {}

    @Mutation('searchEngineDeleteFieldById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
