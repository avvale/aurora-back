/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto, QueueManagerUpdateJobByIdDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpsertJobHandler } from '../handlers/queue-manager-upsert-job.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/upsert')
@Auth('queueManager.job.upsert')
export class QueueManagerUpsertJobController
{
    constructor(
        private readonly handler: QueueManagerUpsertJobHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert job' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: QueueManagerJobDto })
    async main(
        @Body() payload: QueueManagerUpdateJobByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}