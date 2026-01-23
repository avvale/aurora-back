/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchEngineIndexCollectionHandler } from '../handlers/search-engine-index-collection.handler';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/index')
@Auth('searchEngine.collection.update')
export class SearchEngineIndexCollectionController {
  constructor(private readonly handler: SearchEngineIndexCollectionHandler) {}

  @Post()
  @ApiOperation({ summary: 'Defines the operation of this controller' })
  @ApiCreatedResponse({
    description: 'Defines the action performed',
    type: Boolean,
  })
  async main(
    @Body() id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
