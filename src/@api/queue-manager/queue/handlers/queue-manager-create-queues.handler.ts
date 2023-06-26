import { QueueManagerCreateQueueDto } from '../dto';
import { QueueManagerCreateQueueInput } from '@api/graphql';
import { QueueManagerCreateQueuesCommand } from '@app/queue-manager/queue';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerCreateQueuesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: QueueManagerCreateQueueInput[] | QueueManagerCreateQueueDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new QueueManagerCreateQueuesCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}