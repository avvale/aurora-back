/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineFieldDto, SearchEngineFindFieldByIdHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/find')
@Auth('searchEngine.field.get')
export class SearchEngineFindFieldByIdController
{
    constructor(
        private readonly handler: SearchEngineFindFieldByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find field by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: SearchEngineFieldDto })
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
