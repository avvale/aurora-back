/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    SupportConfigDto,
    SupportFindConfigByIdHandler,
} from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[support] config')
@Controller('support/config/find')
@Auth('support.config.get')
export class SupportFindConfigByIdController {
    constructor(private readonly handler: SupportFindConfigByIdHandler) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find config by id' })
    @ApiOkResponse({
        description: 'The record has been successfully requested.',
        type: SupportConfigDto,
    })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ) {
        return await this.handler.main(id, constraint, timezone);
    }
}
