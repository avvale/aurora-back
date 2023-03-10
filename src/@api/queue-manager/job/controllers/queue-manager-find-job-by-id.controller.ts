/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerFindJobByIdHandler } from '../handlers/queue-manager-find-job-by-id.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/find')
@Auth('queueManager.job.get')
export class QueueManagerFindJobByIdController
{
    constructor(
        private readonly handler: QueueManagerFindJobByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find job by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: QueueManagerJobDto })
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