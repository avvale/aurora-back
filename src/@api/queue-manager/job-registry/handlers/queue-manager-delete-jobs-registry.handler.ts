import { QueueManagerJobRegistryDto } from '../dto';
import { QueueManagerJobRegistry } from '@api/graphql';
import { QueueManagerDeleteJobsRegistryCommand, QueueManagerGetJobsRegistryQuery } from '@app/queue-manager/job-registry';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerDeleteJobsRegistryHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerJobRegistry[] | QueueManagerJobRegistryDto[]>
    {
        const jobsRegistry = await this.queryBus.ask(new QueueManagerGetJobsRegistryQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new QueueManagerDeleteJobsRegistryCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return jobsRegistry;
    }
}