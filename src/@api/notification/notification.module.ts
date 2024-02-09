import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { NotificationSeeder } from './notification.seeder';
import { NotificationModels, NotificationHandlers, NotificationServices, NotificationRepositories, NotificationSagas } from '../../@app/notification';
import { NotificationNotificationApiControllers, NotificationNotificationApiResolvers, NotificationNotificationApiHandlers, NotificationNotificationApiServices } from './notification';
import { NotificationInboxApiControllers, NotificationInboxApiResolvers, NotificationInboxApiHandlers, NotificationInboxApiServices } from './inbox';
import { NotificationOutboxApiControllers, NotificationOutboxApiResolvers, NotificationOutboxApiHandlers, NotificationOutboxApiServices } from './outbox';
import { NotificationInboxSettingApiControllers, NotificationInboxSettingApiResolvers, NotificationInboxSettingApiHandlers, NotificationInboxSettingApiServices } from './inbox-setting';
import { NotificationCheckOutboxTask } from './shared/tasks/notification-check-outbox.task';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...NotificationModels,
        ]),
    ],
    controllers: [
        ...NotificationNotificationApiControllers,
        ...NotificationInboxApiControllers,
        ...NotificationOutboxApiControllers,
        ...NotificationInboxSettingApiControllers,
    ],
    providers: [
        NotificationCheckOutboxTask,
        NotificationSeeder,
        ...NotificationHandlers,
        ...NotificationServices,
        ...NotificationRepositories,
        ...NotificationSagas,
        ...NotificationNotificationApiResolvers,
        ...NotificationNotificationApiHandlers,
        ...NotificationNotificationApiServices,
        ...NotificationInboxApiResolvers,
        ...NotificationInboxApiHandlers,
        ...NotificationInboxApiServices,
        ...NotificationOutboxApiResolvers,
        ...NotificationOutboxApiHandlers,
        ...NotificationOutboxApiServices,
        ...NotificationInboxSettingApiResolvers,
        ...NotificationInboxSettingApiHandlers,
        ...NotificationInboxSettingApiServices,
    ],
})
export class NotificationModule {}
