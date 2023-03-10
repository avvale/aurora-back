import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus } from '@aurora-ts/core';

// @app
import { QueueManagerCreateJobInput } from '@api/graphql';
import { QueueManagerCreateJobDto } from '../dto';

@Injectable()
export class QueueManagerCreateJobsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: QueueManagerCreateJobInput[] | QueueManagerCreateJobDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        return;
    }
}