import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}