import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutboxUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}