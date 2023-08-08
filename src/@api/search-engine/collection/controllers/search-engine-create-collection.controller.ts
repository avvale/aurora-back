/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineCollectionDto, SearchEngineCreateCollectionDto, SearchEngineCreateCollectionHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/create')
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionController
{
    constructor(
        private readonly handler: SearchEngineCreateCollectionHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create collection' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: SearchEngineCollectionDto })
    async main(
        @Body() payload: SearchEngineCreateCollectionDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
