/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerDeleteJobByIdHandler } from '../handlers/queue-manager-delete-job-by-id.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/delete')
@Auth('queueManager.job.delete')
export class QueueManagerDeleteJobByIdController
{
    constructor(
        private readonly handler: QueueManagerDeleteJobByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete job by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: QueueManagerJobDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}