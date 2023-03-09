import { QueueManagerQueueHandlers, QueueManagerQueueServices, QueueManagerQueueModel, IQueueRepository, SequelizeQueueRepository, QueueSagas } from './queue';

export const QueueManagerHandlers = [
    ...QueueManagerQueueHandlers
];
export const QueueManagerServices = [
    ...QueueManagerQueueServices
];
export const QueueManagerModels = [
    QueueManagerQueueModel
];
export const QueueManagerRepositories = [
    {
        provide : IQueueRepository,
        useClass: SequelizeQueueRepository
    }
];
export const QueueManagerSagas = [
    QueueSagas
];
