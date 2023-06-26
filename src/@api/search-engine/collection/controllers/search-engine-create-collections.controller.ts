/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { SearchEngineCollectionDto, SearchEngineCreateCollectionDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineCreateCollectionsHandler } from '../handlers/search-engine-create-collections.handler';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collections/create')
@Auth('searchEngine.collection.create')
export class SearchEngineCreateCollectionsController
{
    constructor(
        private readonly handler: SearchEngineCreateCollectionsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create collections in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [SearchEngineCollectionDto]})
    @ApiBody({ type: [SearchEngineCreateCollectionDto]})
    async main(
        @Body() payload: SearchEngineCreateCollectionDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}