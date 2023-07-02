import { AuditingSideEffectHandlers, AuditingSideEffectServices, AuditingSideEffectModel, ISideEffectRepository, SequelizeSideEffectRepository, SideEffectSagas } from './side-effect';
import { AuditingHttpCommunicationHandlers, AuditingHttpCommunicationServices, AuditingHttpCommunicationModel,  AuditingIHttpCommunicationRepository, AuditingSequelizeHttpCommunicationRepository, AuditingHttpCommunicationSagas } from './http-communication';

export const AuditingHandlers = [
    ...AuditingSideEffectHandlers,
    ...AuditingHttpCommunicationHandlers
];
export const AuditingServices = [
    ...AuditingSideEffectServices,
    ...AuditingHttpCommunicationServices
];
export const AuditingModels = [
    AuditingSideEffectModel,
    AuditingHttpCommunicationModel
];
export const AuditingRepositories = [
    {
        provide : ISideEffectRepository,
        useClass: SequelizeSideEffectRepository
    },
    {
        provide : AuditingIHttpCommunicationRepository,
        useClass: AuditingSequelizeHttpCommunicationRepository
    }
];
export const AuditingSagas = [
    SideEffectSagas,
    AuditingHttpCommunicationSagas
];
