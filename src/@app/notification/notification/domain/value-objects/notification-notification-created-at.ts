import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationNotificationCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}