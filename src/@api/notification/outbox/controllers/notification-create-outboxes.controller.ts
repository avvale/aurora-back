/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateOutboxDto, NotificationCreateOutboxesHandler, NotificationOutboxDto } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outboxes/create')
@Auth('notification.outbox.create')
export class NotificationCreateOutboxesController
{
    constructor(
        private readonly handler: NotificationCreateOutboxesHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create outboxes in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [NotificationOutboxDto]})
    @ApiBody({ type: [NotificationCreateOutboxDto]})
    async main(
        @Body() payload: NotificationCreateOutboxDto[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
