import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteFieldsHandler } from '../handlers/search-engine-delete-fields.handler';
import { SearchEngineField } from '@api/graphql';

@Resolver()
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldsResolver
{
    constructor(
        private readonly handler: SearchEngineDeleteFieldsHandler,
    ) {}

    @Mutation('searchEngineDeleteFields')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<SearchEngineField[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}