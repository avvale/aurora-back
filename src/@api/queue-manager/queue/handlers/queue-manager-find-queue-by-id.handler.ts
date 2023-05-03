import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurora-ts/core';

// @app
import { FindQueueByIdQuery } from '@app/queue-manager/queue/application/find/find-queue-by-id.query';
import { QueueManagerQueue } from '@api/graphql';
import { QueueManagerQueueDto } from '../dto';

@Injectable()
export class QueueManagerFindQueueByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerQueue | QueueManagerQueueDto>
    {
        return await this.queryBus.ask(new FindQueueByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}