/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineFieldDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineFindFieldHandler } from '../handlers/search-engine-find-field.handler';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/find')
@Auth('searchEngine.field.get')
export class SearchEngineFindFieldController
{
    constructor(
        private readonly handler: SearchEngineFindFieldHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find field according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: SearchEngineFieldDto })
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