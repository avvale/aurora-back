import {
  SearchEngineCollection,
  SearchEngineUpdateCollectionsInput,
} from '@api/graphql';
import { SearchEngineUpdateCollectionsHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.update')
export class SearchEngineUpdateCollectionsResolver {
  constructor(private readonly handler: SearchEngineUpdateCollectionsHandler) {}

  @Mutation('searchEngineUpdateCollections')
  async main(
    @Args('payload') payload: SearchEngineUpdateCollectionsInput,
    @Args('query') queryStatement?: QueryStatement,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineCollection> {
    return await this.handler.main(
      payload,
      queryStatement,
      constraint,
      timezone,
    );
  }
}
