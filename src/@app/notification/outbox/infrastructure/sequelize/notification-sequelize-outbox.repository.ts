import { NotificationIOutboxRepository, NotificationOutbox, NotificationOutboxMapper, NotificationOutboxModel } from '@app/notification/outbox';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationSequelizeOutboxRepository extends SequelizeRepository<NotificationOutbox, NotificationOutboxModel> implements NotificationIOutboxRepository
{
    public readonly aggregateName: string = 'NotificationOutbox';
    public readonly mapper: NotificationOutboxMapper = new NotificationOutboxMapper();

    constructor(
        @InjectModel(NotificationOutboxModel)
        public readonly repository: typeof NotificationOutboxModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
