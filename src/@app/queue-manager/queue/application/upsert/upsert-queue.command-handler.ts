/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertQueueCommand } from './upsert-queue.command';
import { UpsertQueueService } from './upsert-queue.service';
import {
    QueueId,
    QueuePrefix,
    QueueName,
    QueueWaitingJobs,
    QueueActiveJobs,
    QueueCompletedJobs,
    QueueFailedJobs,
    QueueDelayedJobs,
    QueuePausedJobs,
    QueueCreatedAt,
    QueueUpdatedAt,
    QueueDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(UpsertQueueCommand)
export class UpsertQueueCommandHandler implements ICommandHandler<UpsertQueueCommand>
{
    constructor(
        private readonly upsertQueueService: UpsertQueueService,
    ) {}

    async execute(command: UpsertQueueCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertQueueService.main(
            {
                id: new QueueId(command.payload.id),
                prefix: new QueuePrefix(command.payload.prefix),
                name: new QueueName(command.payload.name),
                waitingJobs: new QueueWaitingJobs(command.payload.waitingJobs),
                activeJobs: new QueueActiveJobs(command.payload.activeJobs),
                completedJobs: new QueueCompletedJobs(command.payload.completedJobs),
                failedJobs: new QueueFailedJobs(command.payload.failedJobs),
                delayedJobs: new QueueDelayedJobs(command.payload.delayedJobs),
                pausedJobs: new QueuePausedJobs(command.payload.pausedJobs),
            },
            command.cQMetadata,
        );
    }
}