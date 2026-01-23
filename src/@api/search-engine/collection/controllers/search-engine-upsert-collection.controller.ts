/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  SearchEngineCollectionDto,
  SearchEngineUpdateCollectionByIdDto,
  SearchEngineUpsertCollectionHandler,
} from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/upsert')
@Auth('searchEngine.collection.upsert')
export class SearchEngineUpsertCollectionController {
  constructor(private readonly handler: SearchEngineUpsertCollectionHandler) {}

  @Post()
  @ApiOperation({ summary: 'Upsert collection' })
  @ApiCreatedResponse({
    description: 'The record has been successfully upserted.',
    type: SearchEngineCollectionDto,
  })
  async main(
    @Body() payload: SearchEngineUpdateCollectionByIdDto,
    @Timezone() timezone?: string,
  ) {
    return await this.handler.main(payload, timezone);
  }
}
