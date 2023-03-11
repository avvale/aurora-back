import { QueueRegister } from '@app/queue-manager/queue-manager.types';

export enum QueueStorage {
    COMMON_MAIL = 'mail',
}

export const appQueues: QueueRegister = {
    iam: [
        {
            name: QueueStorage.COMMON_MAIL,
        },
    ],
};