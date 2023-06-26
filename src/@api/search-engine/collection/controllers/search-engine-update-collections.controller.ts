/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineCollectionDto, SearchEngineUpdateCollectionsDto } from '../dto';
import { SearchEngineUpdateCollectionsHandler } from '../handlers/search-engine-update-collections.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collections/update')
@Auth('searchEngine.collection.update')
export class SearchEngineUpdateCollectionsController
{
    constructor(
        private readonly handler: SearchEngineUpdateCollectionsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update collections' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: SearchEngineCollectionDto })
    async main(
        @Body() payload: SearchEngineUpdateCollectionsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}