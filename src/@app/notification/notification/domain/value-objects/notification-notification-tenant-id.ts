import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationTenantId extends UuidValueObject
{
    public readonly type: string = 'NotificationNotificationTenantId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationTenantId',
            nullable   : true,
            undefinable: true,
            length     : 36,
        }, validationRules), data);
    }
}