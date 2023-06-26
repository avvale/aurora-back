/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineCollectionDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteCollectionByIdHandler } from '../handlers/search-engine-delete-collection-by-id.handler';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collection/delete')
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionByIdController
{
    constructor(
        private readonly handler: SearchEngineDeleteCollectionByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete collection by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: SearchEngineCollectionDto })
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