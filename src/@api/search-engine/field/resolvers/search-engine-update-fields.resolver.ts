import { SearchEngineField, SearchEngineUpdateFieldsInput } from '@api/graphql';
import { SearchEngineUpdateFieldsHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.update')
export class SearchEngineUpdateFieldsResolver {
  constructor(private readonly handler: SearchEngineUpdateFieldsHandler) {}

  @Mutation('searchEngineUpdateFields')
  async main(
    @Args('payload') payload: SearchEngineUpdateFieldsInput,
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineField> {
    return await this.handler.main(
      payload,
      queryStatement,
      constraint,
      timezone,
    );
  }
}
