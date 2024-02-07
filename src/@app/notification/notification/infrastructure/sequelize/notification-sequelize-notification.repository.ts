import { NotificationINotificationRepository, NotificationNotification, NotificationNotificationMapper, NotificationNotificationModel } from '@app/notification/notification';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationSequelizeNotificationRepository extends SequelizeRepository<NotificationNotification, NotificationNotificationModel> implements NotificationINotificationRepository
{
    public readonly aggregateName: string = 'NotificationNotification';
    public readonly mapper: NotificationNotificationMapper = new NotificationNotificationMapper();

    constructor(
        @InjectModel(NotificationNotificationModel)
        public readonly repository: typeof NotificationNotificationModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
