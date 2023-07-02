import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditingRunner, ICriteria, LiteralObject, SequelizeRepository } from '@aurorajs.dev/core';
import { QueueManagerIQueueRepository } from '../../domain/queue-manager-queue.repository';
import { QueueManagerQueue } from '../../domain/queue-manager-queue.aggregate';
import { QueueManagerQueueMapper } from '../../domain/queue-manager-queue.mapper';
import { QueueManagerQueueModel } from './queue-manager-sequelize-queue.model';

@Injectable()
export class QueueManagerSequelizeQueueRepository extends SequelizeRepository<QueueManagerQueue, QueueManagerQueueModel> implements QueueManagerIQueueRepository
{
    public readonly aggregateName: string = 'QueueManagerQueue';
    public readonly mapper: QueueManagerQueueMapper = new QueueManagerQueueMapper();

    constructor(
        @InjectModel(QueueManagerQueueModel)
        public readonly repository: typeof QueueManagerQueueModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}