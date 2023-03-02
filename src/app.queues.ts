import { BullModuleOptions } from '@nestjs/bull';

export const appQueues: { [key:string]: BullModuleOptions[]; } = {
    iam: [
        {
            name: 'audio',
        },
    ],
};