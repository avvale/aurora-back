import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteFieldByIdHandler } from '../handlers/search-engine-delete-field-by-id.handler';
import { SearchEngineField } from '@api/graphql';

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