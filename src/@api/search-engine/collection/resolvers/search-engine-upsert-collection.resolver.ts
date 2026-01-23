import {
  SearchEngineCollection,
  SearchEngineUpdateCollectionByIdInput,
} from '@api/graphql';
import { SearchEngineUpsertCollectionHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.upsert')
export class SearchEngineUpsertCollectionResolver {
  constructor(private readonly handler: SearchEngineUpsertCollectionHandler) {}

  @Mutation('searchEngineUpsertCollection')
  async main(
    @Args('payload') payload: SearchEngineUpdateCollectionByIdInput,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineCollection> {
    return await this.handler.main(payload, timezone);
  }
}
