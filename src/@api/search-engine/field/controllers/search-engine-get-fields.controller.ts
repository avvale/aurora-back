/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineFieldDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineGetFieldsHandler } from '../handlers/search-engine-get-fields.handler';

@ApiTags('[search-engine] field')
@Controller('search-engine/fields/get')
@Auth('searchEngine.field.get')
export class SearchEngineGetFieldsController
{
    constructor(
        private readonly handler: SearchEngineGetFieldsHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get fields according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [SearchEngineFieldDto]})
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