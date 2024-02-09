/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationDeleteOutboxByIdHandler, NotificationOutboxDto } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Delete, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outbox/delete')
@Auth('notification.outbox.delete')
export class NotificationDeleteOutboxByIdController
{
    constructor(
        private readonly handler: NotificationDeleteOutboxByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete outbox by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: NotificationOutboxDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
