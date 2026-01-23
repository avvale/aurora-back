/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineCollectionDto,
  SearchEngineCreateCollectionDto,
  SearchEngineCreateCollectionsHandler,
} from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collections/create')
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionsController {
  constructor(private readonly handler: SearchEngineCreateCollectionsHandler) {}

  @Post()
  @ApiOperation({ summary: 'Create collections in batch' })
  @ApiCreatedResponse({
    description: 'The records has been created successfully.',
    type: [SearchEngineCollectionDto],
  })
  @ApiBody({ type: [SearchEngineCreateCollectionDto] })
  async main(
    @Body() payload: SearchEngineCreateCollectionDto[],
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(payload, timezone);
  }
}
