/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto, QueueManagerUpdateJobsDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpdateJobsHandler } from '../handlers/queue-manager-update-jobs.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/jobs/update')
@Auth('queueManager.job.update')
export class QueueManagerUpdateJobsController
{
    constructor(
        private readonly handler: QueueManagerUpdateJobsHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update jobs' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: QueueManagerJobDto })
    async main(
        @Body() payload: QueueManagerUpdateJobsDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}