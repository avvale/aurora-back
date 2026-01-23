import { Pagination } from '@api/graphql';
import { SearchEnginePaginateCollectionsHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.get')
export class SearchEnginePaginateCollectionsResolver {
  constructor(
    private readonly handler: SearchEnginePaginateCollectionsHandler,
  ) {}

  @Query('searchEnginePaginateCollections')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<Pagination> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
