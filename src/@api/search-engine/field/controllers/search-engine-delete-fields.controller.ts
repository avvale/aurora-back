/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineDeleteFieldsHandler, SearchEngineFieldDto } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

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
