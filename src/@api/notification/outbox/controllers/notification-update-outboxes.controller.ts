/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutboxDto, NotificationUpdateOutboxesDto, NotificationUpdateOutboxesHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outboxes/update')
@Auth('notification.outbox.update')
export class NotificationUpdateOutboxesController
{
    constructor(
        private readonly handler: NotificationUpdateOutboxesHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update outboxes' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationOutboxDto })
    async main(
        @Body() payload: NotificationUpdateOutboxesDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
