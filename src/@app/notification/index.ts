import { NotificationNotificationHandlers, NotificationNotificationServices, NotificationNotificationModel, NotificationINotificationRepository, NotificationSequelizeNotificationRepository, NotificationNotificationSagas } from './notification';

export const NotificationHandlers = [
    ...NotificationNotificationHandlers
];
export const NotificationServices = [
    ...NotificationNotificationServices
];
export const NotificationModels = [
    NotificationNotificationModel
];
export const NotificationRepositories = [
    {
        provide : NotificationINotificationRepository,
        useClass: NotificationSequelizeNotificationRepository
    }
];
export const NotificationSagas = [
    NotificationNotificationSagas
];
