/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineCollectionDto, SearchEngineFindCollectionByIdHandler } from '@api/search-engine/collection';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

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
