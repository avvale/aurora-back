import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationSendAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationNotificationSendAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationSendAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}