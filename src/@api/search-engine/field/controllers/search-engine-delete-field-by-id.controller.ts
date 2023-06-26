/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { SearchEngineFieldDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { SearchEngineDeleteFieldByIdHandler } from '../handlers/search-engine-delete-field-by-id.handler';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/delete')
@Auth('searchEngine.field.delete')
export class SearchEngineDeleteFieldByIdController
{
    constructor(
        private readonly handler: SearchEngineDeleteFieldByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete field by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: SearchEngineFieldDto })
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