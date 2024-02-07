import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { NotificationSeeder } from './notification.seeder';
import { NotificationModels, NotificationHandlers, NotificationServices, NotificationRepositories, NotificationSagas } from '../../@app/notification';
import { NotificationNotificationApiControllers, NotificationNotificationApiResolvers, NotificationNotificationApiHandlers, NotificationNotificationApiServices } from './notification';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...NotificationModels
            ])
    ],
    controllers: [
        ...NotificationNotificationApiControllers
    ],
    providers: [
        NotificationSeeder,
        ...NotificationHandlers,
        ...NotificationServices,
        ...NotificationRepositories,
        ...NotificationSagas,
        ...NotificationNotificationApiResolvers,
        ...NotificationNotificationApiHandlers,
        ...NotificationNotificationApiServices
    ],
})
export class NotificationModule {}
