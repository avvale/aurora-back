/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto, QueueManagerCreateJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerCreateJobsHandler } from '../handlers/queue-manager-create-jobs.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/jobs/create')
@Auth('queueManager.job.create')
export class QueueManagerCreateJobsController
{
    constructor(
        private readonly handler: QueueManagerCreateJobsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create jobs in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [QueueManagerJobDto]})
    @ApiBody({ type: [QueueManagerCreateJobDto]})
    async main(
        @Body() payload: QueueManagerCreateJobDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}