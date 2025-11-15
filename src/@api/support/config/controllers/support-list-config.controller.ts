/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Auth } from '@aurora/decorators';
import {
    Auditing,
    AuditingMeta,
    QueryStatement,
    Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SupportConfigDto } from '../dto';
import { SupportListConfigHandler } from '../handlers/support-list-config.handler';

@ApiTags('[support] config')
@Controller('support/config/list')
@Auth('support.config.get')
export class SupportListConfigController {
    constructor(private readonly handler: SupportListConfigHandler) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({
        description: 'Defines the action performed',
        type: [SupportConfigDto],
    })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ) {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
