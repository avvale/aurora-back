import { NotificationIInboxSettingRepository, NotificationInboxSetting, NotificationInboxSettingMapper, NotificationInboxSettingModel } from '@app/notification/inbox-setting';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class NotificationSequelizeInboxSettingRepository extends SequelizeRepository<NotificationInboxSetting, NotificationInboxSettingModel> implements NotificationIInboxSettingRepository
{
    public readonly aggregateName: string = 'NotificationInboxSetting';
    public readonly mapper: NotificationInboxSettingMapper = new NotificationInboxSettingMapper();

    constructor(
        @InjectModel(NotificationInboxSettingModel)
        public readonly repository: typeof NotificationInboxSettingModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
