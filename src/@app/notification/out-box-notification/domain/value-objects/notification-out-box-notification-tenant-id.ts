import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationTenantId extends UuidValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationTenantId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationTenantId',
            nullable   : true,
            undefinable: true,
            length     : 36,
        }, validationRules), data);
    }
}