import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}