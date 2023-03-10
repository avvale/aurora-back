import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurora-ts/core';

// @app

import { QueueManagerJob, QueueManagerCreateJobInput } from '@api/graphql';
import { QueueManagerJobDto, QueueManagerCreateJobDto } from '../dto';

@Injectable()
export class QueueManagerCreateJobHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerCreateJobInput | QueueManagerCreateJobDto,
        timezone?: string,
    ): Promise<QueueManagerJob | QueueManagerJobDto>
    {
        return;
    }
}