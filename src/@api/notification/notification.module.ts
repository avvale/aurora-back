import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { NotificationSeeder } from './notification.seeder';
import { NotificationModels, NotificationHandlers, NotificationServices, NotificationRepositories, NotificationSagas } from '../../@app/notification';
import { NotificationOutBoxNotificationApiControllers, NotificationOutBoxNotificationApiResolvers, NotificationOutBoxNotificationApiHandlers, NotificationOutBoxNotificationApiServices } from './out-box-notification';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...NotificationModels
            ])
    ],
    controllers: [
        ...NotificationOutBoxNotificationApiControllers
    ],
    providers: [
        NotificationSeeder,
        ...NotificationHandlers,
        ...NotificationServices,
        ...NotificationRepositories,
        ...NotificationSagas,
        ...NotificationOutBoxNotificationApiResolvers,
        ...NotificationOutBoxNotificationApiHandlers,
        ...NotificationOutBoxNotificationApiServices
    ],
})
export class NotificationModule {}
