import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationId extends UuidValueObject
{
    public readonly type: string = 'NotificationNotificationId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}