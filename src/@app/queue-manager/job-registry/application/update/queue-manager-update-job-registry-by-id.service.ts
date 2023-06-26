import { QueueManagerJobRegistry } from '../../domain/queue-manager-job-registry.aggregate';
import { QueueManagerIJobRegistryRepository } from '../../domain/queue-manager-job-registry.repository';
import {
    QueueManagerJobRegistryCreatedAt,
    QueueManagerJobRegistryDeletedAt,
    QueueManagerJobRegistryId,
    QueueManagerJobRegistryJobId,
    QueueManagerJobRegistryJobName,
    QueueManagerJobRegistryQueueName,
    QueueManagerJobRegistryState,
    QueueManagerJobRegistryTags,
    QueueManagerJobRegistryUpdatedAt,
} from '../../domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class QueueManagerUpdateJobRegistryByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: QueueManagerIJobRegistryRepository,
    ) {}

    async main(
        payload: {
            id: QueueManagerJobRegistryId;
            queueName?: QueueManagerJobRegistryQueueName;
            state?: QueueManagerJobRegistryState;
            jobId?: QueueManagerJobRegistryJobId;
            jobName?: QueueManagerJobRegistryJobName;
            tags?: QueueManagerJobRegistryTags;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const jobRegistry = QueueManagerJobRegistry.register(
            payload.id,
            payload.queueName,
            payload.state,
            payload.jobId,
            payload.jobName,
            payload.tags,
            null, // createdAt
            new QueueManagerJobRegistryUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            jobRegistry,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const jobRegistryRegister = this.publisher.mergeObjectContext(
            jobRegistry,
        );

        jobRegistryRegister.updated(jobRegistry); // apply event to model events
        jobRegistryRegister.commit(); // commit all events of model
    }
}