/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationOutboxDto, NotificationUpdateOutboxByIdDto, NotificationUpdateOutboxByIdHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outbox/update')
@Auth('notification.outbox.update')
export class NotificationUpdateOutboxByIdController
{
    constructor(
        private readonly handler: NotificationUpdateOutboxByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update outbox by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: NotificationOutboxDto })
    async main(
        @Body() payload: NotificationUpdateOutboxByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
