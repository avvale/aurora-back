import { SearchEngineField } from '@api/graphql';
import { SearchEngineFindFieldHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEngineFindFieldResolver {
  constructor(private readonly handler: SearchEngineFindFieldHandler) {}

  @Query('searchEngineFindField')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineField> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
