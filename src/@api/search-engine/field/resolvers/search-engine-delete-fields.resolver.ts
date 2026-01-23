import { SearchEngineField } from '@api/graphql';
import { SearchEngineDeleteFieldsHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldsResolver {
  constructor(private readonly handler: SearchEngineDeleteFieldsHandler) {}

  @Mutation('searchEngineDeleteFields')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineField[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
