import { SearchEngineCollection } from '@api/graphql';
import { SearchEngineDeleteCollectionByIdHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionByIdResolver {
  constructor(
    private readonly handler: SearchEngineDeleteCollectionByIdHandler,
  ) {}

  @Mutation('searchEngineDeleteCollectionById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineCollection> {
    return await this.handler.main(id, constraint, timezone);
  }
}
