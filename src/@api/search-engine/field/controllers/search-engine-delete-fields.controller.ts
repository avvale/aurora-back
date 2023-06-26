/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineFieldDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteFieldsHandler } from '../handlers/search-engine-delete-fields.handler';

@ApiTags('[search-engine] field')
@Controller('search-engine/fields/delete')
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldsController
{
    constructor(
        private readonly handler: SearchEngineDeleteFieldsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete fields in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [SearchEngineFieldDto]})
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