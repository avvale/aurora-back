import { QueueManagerQueueDto, QueueManagerUpdateQueuesDto } from '../dto';
import { QueueManagerQueue, QueueManagerUpdateQueuesInput } from '@api/graphql';
import { QueueManagerGetQueuesQuery, QueueManagerUpdateQueuesCommand } from '@app/queue-manager/queue';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerUpdateQueuesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerUpdateQueuesInput | QueueManagerUpdateQueuesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerQueue | QueueManagerQueueDto>
    {
        await this.commandBus.dispatch(new QueueManagerUpdateQueuesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new QueueManagerGetQueuesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}