import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}