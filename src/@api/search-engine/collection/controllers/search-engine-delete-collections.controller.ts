/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineCollectionDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteCollectionsHandler } from '../handlers/search-engine-delete-collections.handler';

@ApiTags('[search-engine] collection')
@Controller('search-engine/collections/delete')
@Auth('searchEngine.collection.delete')
export class SearchEngineDeleteCollectionsController
{
    constructor(
        private readonly handler: SearchEngineDeleteCollectionsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete collections in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [SearchEngineCollectionDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}