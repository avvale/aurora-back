import { NotificationIInboxRepository, NotificationInbox, NotificationInboxMapper, NotificationInboxModel } from '@app/notification/inbox';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationSequelizeInboxRepository extends SequelizeRepository<NotificationInbox, NotificationInboxModel> implements NotificationIInboxRepository
{
    public readonly aggregateName: string = 'NotificationInbox';
    public readonly mapper: NotificationInboxMapper = new NotificationInboxMapper();

    constructor(
        @InjectModel(NotificationInboxModel)
        public readonly repository: typeof NotificationInboxModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
