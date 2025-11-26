/* eslint-disable comma-dangle */
import { MessageInboxHandlers, MessageInboxServices, MessageInboxModel, MessageIInboxRepository, MessageSequelizeInboxRepository, MessageInboxSagas } from './inbox';
import { MessageMessageHandlers, MessageMessageServices, MessageMessageModel, MessageIMessageRepository, MessageSequelizeMessageRepository, MessageMessageSagas } from './message';
import { MessageInboxSettingHandlers, MessageInboxSettingServices, MessageInboxSettingModel, MessageIInboxSettingRepository, MessageSequelizeInboxSettingRepository, MessageInboxSettingSagas } from './inbox-setting';

export const MessageHandlers = [
    ...MessageInboxHandlers,
    ...MessageMessageHandlers,
    ...MessageInboxSettingHandlers
];
export const MessageServices = [
    ...MessageInboxServices,
    ...MessageMessageServices,
    ...MessageInboxSettingServices
];
export const MessageModels = [
    MessageInboxModel,
    MessageMessageModel,
    MessageInboxSettingModel
];
export const MessageRepositories = [
    {
        provide : MessageIInboxRepository,
        useClass: MessageSequelizeInboxRepository,
    },
    {
        provide : MessageIMessageRepository,
        useClass: MessageSequelizeMessageRepository,
    },
    {
        provide : MessageIInboxSettingRepository,
        useClass: MessageSequelizeInboxSettingRepository,
    }
];
export const MessageSagas = [
    MessageInboxSagas,
    MessageMessageSagas,
    MessageInboxSettingSagas
];