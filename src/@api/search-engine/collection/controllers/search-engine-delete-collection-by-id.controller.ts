/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineCollectionDto,
  SearchEngineDeleteCollectionByIdHandler,
} from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/delete')
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionByIdController {
  constructor(
    private readonly handler: SearchEngineDeleteCollectionByIdHandler,
  ) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete collection by id' })
  @ApiOkResponse({
    description: 'The record has been deleted successfully.',
    type: SearchEngineCollectionDto,
  })
  async main(
    @Param('id') id: string,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(id, constraint, timezone);
  }
}
