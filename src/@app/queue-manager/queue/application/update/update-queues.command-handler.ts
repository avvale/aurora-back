/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateQueuesCommand } from './update-queues.command';
import { UpdateQueuesService } from './update-queues.service';
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

@CommandHandler(UpdateQueuesCommand)
export class UpdateQueuesCommandHandler implements ICommandHandler<UpdateQueuesCommand>
{
    constructor(
        private readonly updateQueuesService: UpdateQueuesService,
    ) {}

    async execute(command: UpdateQueuesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateQueuesService.main(
            {
                id: new QueueId(command.payload.id, { undefinable: true }),
                prefix: new QueuePrefix(command.payload.prefix, { undefinable: true }),
                name: new QueueName(command.payload.name, { undefinable: true }),
                waitingJobs: new QueueWaitingJobs(command.payload.waitingJobs, { undefinable: true }),
                activeJobs: new QueueActiveJobs(command.payload.activeJobs, { undefinable: true }),
                completedJobs: new QueueCompletedJobs(command.payload.completedJobs, { undefinable: true }),
                failedJobs: new QueueFailedJobs(command.payload.failedJobs, { undefinable: true }),
                delayedJobs: new QueueDelayedJobs(command.payload.delayedJobs, { undefinable: true }),
                pausedJobs: new QueuePausedJobs(command.payload.pausedJobs, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}