import { SearchEngineField } from '@api/graphql';
import { SearchEngineFindFieldByIdHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('searchEngine.field.get')
export class SearchEngineFindFieldByIdResolver {
  constructor(private readonly handler: SearchEngineFindFieldByIdHandler) {}

  @Query('searchEngineFindFieldById')
  async main(
    @Args('id') id: string,
    @Args('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ): Promise<SearchEngineField> {
    return await this.handler.main(id, constraint, timezone);
  }
}
