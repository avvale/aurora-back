/* eslint-disable comma-dangle */
import { WhatsappWebhookHandlers, WhatsappWebhookServices, WhatsappWebhookModel, WhatsappIWebhookRepository, WhatsappSequelizeWebhookRepository, WhatsappWebhookSagas } from './webhook';

export const WhatsappHandlers = [
    ...WhatsappWebhookHandlers
];
export const WhatsappServices = [
    ...WhatsappWebhookServices
];
export const WhatsappModels = [
    WhatsappWebhookModel
];
export const WhatsappRepositories = [
    {
        provide : WhatsappIWebhookRepository,
        useClass: WhatsappSequelizeWebhookRepository
    }
];
export const WhatsappSagas = [
    WhatsappWebhookSagas
];
