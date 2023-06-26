import { QueueManagerCreateJobRegistryDto } from '../dto';
import { QueueManagerCreateJobRegistryInput } from '@api/graphql';
import { QueueManagerCreateJobsRegistryCommand } from '@app/queue-manager/job-registry';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerCreateJobsRegistryHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: QueueManagerCreateJobRegistryInput[] | QueueManagerCreateJobRegistryDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new QueueManagerCreateJobsRegistryCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}