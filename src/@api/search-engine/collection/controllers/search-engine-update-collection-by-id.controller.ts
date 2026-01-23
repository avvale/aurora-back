/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineCollectionDto,
  SearchEngineUpdateCollectionByIdDto,
  SearchEngineUpdateCollectionByIdHandler,
} from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/update')
@Auth('searchEngine.collection.update')
export class SearchEngineUpdateCollectionByIdController {
  constructor(
    private readonly handler: SearchEngineUpdateCollectionByIdHandler,
  ) {}

  @Put()
  @ApiOperation({ summary: 'Update collection by id' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: SearchEngineCollectionDto,
  })
  async main(
    @Body() payload: SearchEngineUpdateCollectionByIdDto,
    @Body('constraint') constraint?: QueryStatement,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(payload, constraint, timezone);
  }
}
