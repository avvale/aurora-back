import { SearchEngineIndexCollectionHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.collection.update')
export class SearchEngineIndexCollectionResolver {
  constructor(private readonly handler: SearchEngineIndexCollectionHandler) {}

  @Mutation('searchEngineIndexCollection')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<boolean> {
    return await this.handler.main(id, constraint, timezone);
  }
}
