import { NotificationNotificationHandlers, NotificationNotificationServices, NotificationNotificationModel, NotificationINotificationRepository, NotificationSequelizeNotificationRepository, NotificationNotificationSagas } from './notification';
import { NotificationInboxHandlers, NotificationInboxServices, NotificationInboxModel, NotificationIInboxRepository, NotificationSequelizeInboxRepository, NotificationInboxSagas } from './inbox';
import { NotificationOutboxHandlers, NotificationOutboxServices, NotificationOutboxModel, NotificationIOutboxRepository, NotificationSequelizeOutboxRepository, NotificationOutboxSagas } from './outbox';
import { NotificationInboxSettingHandlers, NotificationInboxSettingServices, NotificationInboxSettingModel, NotificationIInboxSettingRepository, NotificationSequelizeInboxSettingRepository, NotificationInboxSettingSagas } from './inbox-setting';

export const NotificationHandlers = [
    ...NotificationNotificationHandlers,
    ...NotificationInboxHandlers,
    ...NotificationOutboxHandlers,
    ...NotificationInboxSettingHandlers
];
export const NotificationServices = [
    ...NotificationNotificationServices,
    ...NotificationInboxServices,
    ...NotificationOutboxServices,
    ...NotificationInboxSettingServices
];
export const NotificationModels = [
    NotificationNotificationModel,
    NotificationInboxModel,
    NotificationOutboxModel,
    NotificationInboxSettingModel
];
export const NotificationRepositories = [
    {
        provide : NotificationINotificationRepository,
        useClass: NotificationSequelizeNotificationRepository
    },
    {
        provide : NotificationIInboxRepository,
        useClass: NotificationSequelizeInboxRepository
    },
    {
        provide : NotificationIOutboxRepository,
        useClass: NotificationSequelizeOutboxRepository
    },
    {
        provide : NotificationIInboxSettingRepository,
        useClass: NotificationSequelizeInboxSettingRepository
    }
];
export const NotificationSagas = [
    NotificationNotificationSagas,
    NotificationInboxSagas,
    NotificationOutboxSagas,
    NotificationInboxSettingSagas
];
