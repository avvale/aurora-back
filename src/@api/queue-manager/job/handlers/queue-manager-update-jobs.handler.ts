import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { QueueManagerJob, QueueManagerUpdateJobsInput } from '@api/graphql';
import { QueueManagerJobDto, QueueManagerUpdateJobsDto } from '../dto';

@Injectable()
export class QueueManagerUpdateJobsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerUpdateJobsInput | QueueManagerUpdateJobsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerJob | QueueManagerJobDto>
    {
        return;
    }
}