/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SearchEngineFieldDto, SearchEngineUpdateFieldByIdDto, SearchEngineUpdateFieldByIdHandler } from '@api/search-engine/field';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[search-engine] field')
@Controller('search-engine/field/update')
@Auth('searchEngine.field.update')
export class SearchEngineUpdateFieldByIdController
{
    constructor(
        private readonly handler: SearchEngineUpdateFieldByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update field by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: SearchEngineFieldDto })
    async main(
        @Body() payload: SearchEngineUpdateFieldByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}
