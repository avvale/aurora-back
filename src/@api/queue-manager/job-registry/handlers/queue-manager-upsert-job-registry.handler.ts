import { QueueManagerJobRegistryDto, QueueManagerUpdateJobRegistryByIdDto } from '../dto';
import { QueueManagerJobRegistry, QueueManagerUpdateJobRegistryByIdInput } from '@api/graphql';
import { QueueManagerFindJobRegistryByIdQuery, QueueManagerUpsertJobRegistryCommand } from '@app/queue-manager/job-registry';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerUpsertJobRegistryHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerUpdateJobRegistryByIdInput | QueueManagerUpdateJobRegistryByIdDto,
        timezone?: string,
    ): Promise<QueueManagerJobRegistry | QueueManagerJobRegistryDto>
    {
        await this.commandBus.dispatch(new QueueManagerUpsertJobRegistryCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new QueueManagerFindJobRegistryByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}