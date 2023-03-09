import { BullModuleOptions } from '@nestjs/bull';

export enum QueueStorage {
    COMMON_MAIL = 'mail',
}

export const appQueues: { [key:string]: BullModuleOptions[]; } = {
    iam: [
        {
            name: QueueStorage.COMMON_MAIL,
        },
    ],
};