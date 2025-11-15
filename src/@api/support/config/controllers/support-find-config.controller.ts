/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    SupportConfigDto,
    SupportFindConfigHandler,
} from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
    ApiBody,
    ApiOkResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('[support] config')
@Controller('support/config/find')
@Auth('support.config.get')
export class SupportFindConfigController {
    constructor(private readonly handler: SupportFindConfigHandler) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find config according to query' })
    @ApiOkResponse({
        description: 'The record has been successfully created.',
        type: SupportConfigDto,
    })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ) {
        return await this.handler.main(queryStatement, constraint, timezone);
    }
}
