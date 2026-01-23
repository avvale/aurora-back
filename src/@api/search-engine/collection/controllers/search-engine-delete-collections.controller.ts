/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineCollectionDto,
  SearchEngineDeleteCollectionsHandler,
} from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collections/delete')
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionsController {
  constructor(private readonly handler: SearchEngineDeleteCollectionsHandler) {}

  @Delete()
  @ApiOperation({ summary: 'Delete collections in batch according to query' })
  @ApiOkResponse({
    description: 'The records has been deleted successfully.',
    type: [SearchEngineCollectionDto],
  })
  @ApiBody({ type: QueryStatement })
  @ApiQuery({ name: 'query', type: QueryStatement })
  async main(
    @Body('query') queryStatement?: QueryStatement,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(queryStatement, constraint, timezone);
  }
}
