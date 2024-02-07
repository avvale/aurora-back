import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationNotificationDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}