/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineCollectionDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineFindCollectionByIdHandler } from '../handlers/search-engine-find-collection-by-id.handler';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/find')
@Auth('searchEngine.collection.get')
export class SearchEngineFindCollectionByIdController
{
    constructor(
        private readonly handler: SearchEngineFindCollectionByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find collection by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: SearchEngineCollectionDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}