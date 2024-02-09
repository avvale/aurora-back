/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationCreateOutboxDto, NotificationCreateOutboxHandler, NotificationOutboxDto } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outbox/create')
@Auth('notification.outbox.create')
export class NotificationCreateOutboxController
{
    constructor(
        private readonly handler: NotificationCreateOutboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create outbox' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: NotificationOutboxDto })
    async main(
        @Body() payload: NotificationCreateOutboxDto,
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
