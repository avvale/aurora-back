/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateQueueByIdCommand } from './update-queue-by-id.command';
import { UpdateQueueByIdService } from './update-queue-by-id.service';
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

@CommandHandler(UpdateQueueByIdCommand)
export class UpdateQueueByIdCommandHandler implements ICommandHandler<UpdateQueueByIdCommand>
{
    constructor(
        private readonly updateQueueByIdService: UpdateQueueByIdService,
    ) {}

    async execute(command: UpdateQueueByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateQueueByIdService.main(
            {
                id: new QueueId(command.payload.id),
                prefix: new QueuePrefix(command.payload.prefix, { undefinable: true }),
                name: new QueueName(command.payload.name, { undefinable: true }),
                waitingJobs: new QueueWaitingJobs(command.payload.waitingJobs, { undefinable: true }),
                activeJobs: new QueueActiveJobs(command.payload.activeJobs, { undefinable: true }),
                completedJobs: new QueueCompletedJobs(command.payload.completedJobs, { undefinable: true }),
                failedJobs: new QueueFailedJobs(command.payload.failedJobs, { undefinable: true }),
                delayedJobs: new QueueDelayedJobs(command.payload.delayedJobs, { undefinable: true }),
                pausedJobs: new QueuePausedJobs(command.payload.pausedJobs, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}