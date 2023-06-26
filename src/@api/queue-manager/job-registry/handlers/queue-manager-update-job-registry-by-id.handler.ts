import { QueueManagerJobRegistryDto, QueueManagerUpdateJobRegistryByIdDto } from '../dto';
import { QueueManagerJobRegistry, QueueManagerUpdateJobRegistryByIdInput } from '@api/graphql';
import { QueueManagerFindJobRegistryByIdQuery, QueueManagerUpdateJobRegistryByIdCommand } from '@app/queue-manager/job-registry';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueManagerUpdateJobRegistryByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: QueueManagerUpdateJobRegistryByIdInput | QueueManagerUpdateJobRegistryByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<QueueManagerJobRegistry | QueueManagerJobRegistryDto>
    {
        const jobRegistry = await this.queryBus.ask(new QueueManagerFindJobRegistryByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, jobRegistry);

        await this.commandBus.dispatch(new QueueManagerUpdateJobRegistryByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new QueueManagerFindJobRegistryByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}