import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationTenantIds extends JsonValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationTenantIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationTenantIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}