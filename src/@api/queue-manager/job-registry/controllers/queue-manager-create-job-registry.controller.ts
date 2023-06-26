/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { QueueManagerCreateJobRegistryDto, QueueManagerJobRegistryDto } from '../dto';
import { QueueManagerCreateJobRegistryHandler } from '../handlers/queue-manager-create-job-registry.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[queue-manager] job-registry')
@Controller('queue-manager/job-registry/create')
@Auth('queueManager.jobRegistry.create')
export class QueueManagerCreateJobRegistryController
{
    constructor(
        private readonly handler: QueueManagerCreateJobRegistryHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create job-registry' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: QueueManagerJobRegistryDto })
    async main(
        @Body() payload: QueueManagerCreateJobRegistryDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}