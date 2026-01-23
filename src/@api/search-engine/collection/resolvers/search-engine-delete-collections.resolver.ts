import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineDeleteCollectionsHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionsResolver {
  constructor(private readonly handler: SearchEngineDeleteCollectionsHandler) {}

  @Mutation('searchEngineDeleteCollections')
  async main(
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineCollection[]> {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
