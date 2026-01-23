import { SearchEngineField } from '@api/graphql';
import { SearchEngineGetFieldsHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEngineGetFieldsResolver {
  constructor(private readonly handler: SearchEngineGetFieldsHandler) {}

  @Query('searchEngineGetFields')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineField[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
