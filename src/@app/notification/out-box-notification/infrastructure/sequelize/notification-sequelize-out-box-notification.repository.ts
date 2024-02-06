import { NotificationIOutBoxNotificationRepository, NotificationOutBoxNotification, NotificationOutBoxNotificationMapper, NotificationOutBoxNotificationModel } from '@app/notification/out-box-notification';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationSequelizeOutBoxNotificationRepository extends SequelizeRepository<NotificationOutBoxNotification, NotificationOutBoxNotificationModel> implements NotificationIOutBoxNotificationRepository
{
    public readonly aggregateName: string = 'NotificationOutBoxNotification';
    public readonly mapper: NotificationOutBoxNotificationMapper = new NotificationOutBoxNotificationMapper();

    constructor(
        @InjectModel(NotificationOutBoxNotificationModel)
        public readonly repository: typeof NotificationOutBoxNotificationModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
