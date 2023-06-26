/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { QueueManagerCreateQueueDto, QueueManagerQueueDto } from '../dto';
import { QueueManagerCreateQueueHandler } from '../handlers/queue-manager-create-queue.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[queue-manager] queue')
@Controller('queue-manager/queue/create')
@Auth('queueManager.queue.create')
export class QueueManagerCreateQueueController
{
    constructor(
        private readonly handler: QueueManagerCreateQueueHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create queue' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: QueueManagerQueueDto })
    async main(
        @Body() payload: QueueManagerCreateQueueDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}