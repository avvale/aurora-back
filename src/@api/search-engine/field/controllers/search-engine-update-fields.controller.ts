/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineFieldDto, SearchEngineUpdateFieldsDto } from '../dto';
import { SearchEngineUpdateFieldsHandler } from '../handlers/search-engine-update-fields.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/fields/update')
@Auth('searchEngine.field.update')
export class SearchEngineUpdateFieldsController
{
    constructor(
        private readonly handler: SearchEngineUpdateFieldsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update fields' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: SearchEngineFieldDto })
    async main(
        @Body() payload: SearchEngineUpdateFieldsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}