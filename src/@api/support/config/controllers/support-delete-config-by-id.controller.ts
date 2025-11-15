/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
    SupportConfigDto,
    SupportDeleteConfigByIdHandler,
} from '@api/support/config';
import { Auth } from '@aurora/decorators';
import {
    Auditing,
    AuditingMeta,
    QueryStatement,
    Timezone,
} from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[support] config')
@Controller('support/config/delete')
@Auth('support.config.delete')
export class SupportDeleteConfigByIdController {
    constructor(private readonly handler: SupportDeleteConfigByIdHandler) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete config by id' })
    @ApiOkResponse({
        description: 'The record has been deleted successfully.',
        type: SupportConfigDto,
    })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ) {
        return await this.handler.main(id, constraint, timezone, auditing);
    }
}
