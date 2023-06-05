import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, ContentLanguage, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { CommonDeleteCountryByIdHandler } from '../handlers/common-delete-country-by-id.handler';
import { CommonCountry } from '@api/graphql';

@Resolver()
export class CommonDeleteCountryByIdResolver
{
    constructor(
        private readonly handler: CommonDeleteCountryByIdHandler,
    ) {}

    @Mutation('commonDeleteCountryById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @ContentLanguage() contentLanguage?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<CommonCountry>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            contentLanguage,
            auditing,
        );
    }
}