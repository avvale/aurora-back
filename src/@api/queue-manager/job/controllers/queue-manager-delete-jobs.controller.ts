/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerDeleteJobsHandler } from '../handlers/queue-manager-delete-jobs.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/jobs/delete')
@Auth('queueManager.job.delete')
export class QueueManagerDeleteJobsController
{
    constructor(
        private readonly handler: QueueManagerDeleteJobsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete jobs in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [QueueManagerJobDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}