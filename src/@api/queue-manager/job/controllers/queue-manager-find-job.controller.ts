/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { QueueManagerJobDto } from '../dto';
import { Auth } from '@aurora/decorators';

// @app
import { QueueManagerFindJobHandler } from '../handlers/queue-manager-find-job.handler';

@ApiTags('[queue-manager] job')
@Controller('queue-manager/job/find')
@Auth('queueManager.job.get')
export class QueueManagerFindJobController
{
    constructor(
        private readonly handler: QueueManagerFindJobHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find job according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: QueueManagerJobDto })
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