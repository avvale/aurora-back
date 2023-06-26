/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { SearchEngineFieldDto, SearchEngineCreateFieldDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineCreateFieldsHandler } from '../handlers/search-engine-create-fields.handler';

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