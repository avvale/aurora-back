/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto, QueueManagerUpdateJobByIdDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerUpdateJobByIdHandler } from '../handlers/queue-manager-update-job-by-id.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/update')
@Auth('queueManager.job.update')
export class QueueManagerUpdateJobByIdController
{
    constructor(
        private readonly handler: QueueManagerUpdateJobByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update job by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: QueueManagerJobDto })
    async main(
        @Body() payload: QueueManagerUpdateJobByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}