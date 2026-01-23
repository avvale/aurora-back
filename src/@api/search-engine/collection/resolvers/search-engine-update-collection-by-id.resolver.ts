import {
  SearchEngineCollection,
  SearchEngineUpdateCollectionByIdInput,
} from '@api/graphql';
import { SearchEngineUpdateCollectionByIdHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.update')
export class SearchEngineUpdateCollectionByIdResolver {
  constructor(
    private readonly handler: SearchEngineUpdateCollectionByIdHandler,
  ) {}

  @Mutation('searchEngineUpdateCollectionById')
  async main(
    @Args('payload') payload: SearchEngineUpdateCollectionByIdInput,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineCollection> {
    return await this.handler.main(payload, constraint, timezone);
  }
}
