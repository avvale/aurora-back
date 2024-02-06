import { NotificationOutBoxNotificationHandlers, NotificationOutBoxNotificationServices, NotificationOutBoxNotificationModel, NotificationIOutBoxNotificationRepository, NotificationSequelizeOutBoxNotificationRepository, NotificationOutBoxNotificationSagas } from './out-box-notification';

export const NotificationHandlers = [
    ...NotificationOutBoxNotificationHandlers
];
export const NotificationServices = [
    ...NotificationOutBoxNotificationServices
];
export const NotificationModels = [
    NotificationOutBoxNotificationModel
];
export const NotificationRepositories = [
    {
        provide : NotificationIOutBoxNotificationRepository,
        useClass: NotificationSequelizeOutBoxNotificationRepository
    }
];
export const NotificationSagas = [
    NotificationOutBoxNotificationSagas
];
