import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { QueueManagerJob } from '@api/graphql';
import { QueueManagerJobDto } from '../dto';

@Injectable()
export class QueueManagerDeleteJobsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerJob[] | QueueManagerJobDto[]>
    {
        return;
    }
}