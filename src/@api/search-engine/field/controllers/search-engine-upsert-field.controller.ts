/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineFieldDto, SearchEngineUpdateFieldByIdDto } from '../dto';
import { SearchEngineUpsertFieldHandler } from '../handlers/search-engine-upsert-field.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/upsert')
@Auth('searchEngine.field.upsert')
export class SearchEngineUpsertFieldController
{
    constructor(
        private readonly handler: SearchEngineUpsertFieldHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert field' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: SearchEngineFieldDto })
    async main(
        @Body() payload: SearchEngineUpdateFieldByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}