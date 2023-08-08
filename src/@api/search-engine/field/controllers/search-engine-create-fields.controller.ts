/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineCreateFieldDto, SearchEngineCreateFieldsHandler, SearchEngineFieldDto } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/fields/create')
@Auth('searchEngine.field.create')
export class SearchEngineCreateFieldsController
{
    constructor(
        private readonly handler: SearchEngineCreateFieldsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create fields in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [SearchEngineFieldDto]})
    @ApiBody({ type: [SearchEngineCreateFieldDto]})
    async main(
        @Body() payload: SearchEngineCreateFieldDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}
