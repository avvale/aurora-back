import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationNotificationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}