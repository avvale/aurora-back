/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    SupportConfigDto,
    SupportCreateConfigDto,
    SupportCreateConfigHandler,
} from '@api/support/config';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[support] config')
@Controller('support/config/create')
@Auth('support.config.create')
export class SupportCreateConfigController {
    constructor(private readonly handler: SupportCreateConfigHandler) {}

    @Post()
    @ApiOperation({ summary: 'Create config' })
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: SupportConfigDto,
    })
    async main(
        @Body() payload: SupportCreateConfigDto,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ) {
        return await this.handler.main(payload, timezone, auditing);
    }
}
