import { SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionsHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionsResolver {
  constructor(private readonly handler: SearchEngineCreateCollectionsHandler) {}

  @Mutation('searchEngineCreateCollections')
  async main(
    @Args('payload') payload: SearchEngineCreateCollectionInput[],
    @Timezone() timezone?: string,
  ): Promise<boolean> {
    return await this.handler.main(payload, timezone);
  }
}
