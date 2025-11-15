/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    SupportConfigDto,
    SupportUpdateConfigByIdDto,
    SupportUpdateConfigByIdHandler,
} from '@api/support/config';
import { Auth } from '@aurora/decorators';
import {
    Auditing,
    AuditingMeta,
    QueryStatement,
    Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[support] config')
@Controller('support/config/update')
@Auth('support.config.update')
export class SupportUpdateConfigByIdController {
    constructor(private readonly handler: SupportUpdateConfigByIdHandler) {}

    @Put()
    @ApiOperation({ summary: 'Update config by id' })
    @ApiOkResponse({
        description: 'The record has been successfully updated.',
        type: SupportConfigDto,
    })
    async main(
        @Body() payload: SupportUpdateConfigByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ) {
        return await this.handler.main(payload, constraint, timezone, auditing);
    }
}
