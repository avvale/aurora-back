/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateQueueCommand } from './create-queue.command';
import { CreateQueueService } from './create-queue.service';
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

@CommandHandler(CreateQueueCommand)
export class CreateQueueCommandHandler implements ICommandHandler<CreateQueueCommand>
{
    constructor(
        private readonly createQueueService: CreateQueueService,
    ) {}

    async execute(command: CreateQueueCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createQueueService.main(
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