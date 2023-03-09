export const QUEUE_REDIS = Symbol('QUEUE_REDIS');

export interface QueueDefinition
{
    prefix: string;
    name: string;
}