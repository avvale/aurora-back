/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineCreateFieldDto, SearchEngineFieldDto } from '../dto';
import { SearchEngineCreateFieldHandler } from '../handlers/search-engine-create-field.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/create')
@Auth('searchEngine.field.create')
export class SearchEngineCreateFieldController
{
    constructor(
        private readonly handler: SearchEngineCreateFieldHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create field' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: SearchEngineFieldDto })
    async main(
        @Body() payload: SearchEngineCreateFieldDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}