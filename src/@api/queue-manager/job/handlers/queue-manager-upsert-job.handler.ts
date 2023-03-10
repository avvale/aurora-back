import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurora-ts/core';

// @app
import { QueueManagerJob, QueueManagerUpdateJobByIdInput } from '@api/graphql';
import { QueueManagerJobDto, QueueManagerUpdateJobByIdDto } from '../dto';

@Injectable()
export class QueueManagerUpsertJobHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerUpdateJobByIdInput | QueueManagerUpdateJobByIdDto,
        timezone?: string,
    ): Promise<QueueManagerJob | QueueManagerJobDto>
    {
        return;
    }
}