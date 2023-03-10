/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto, QueueManagerCreateJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerCreateJobHandler } from '../handlers/queue-manager-create-job.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/create')
@Auth('queueManager.job.create')
export class QueueManagerCreateJobController
{
    constructor(
        private readonly handler: QueueManagerCreateJobHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create job' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: QueueManagerJobDto })
    async main(
        @Body() payload: QueueManagerCreateJobDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}