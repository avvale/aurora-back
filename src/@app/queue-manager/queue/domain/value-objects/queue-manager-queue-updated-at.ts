import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class QueueManagerQueueUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'QueueUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'QueueUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}