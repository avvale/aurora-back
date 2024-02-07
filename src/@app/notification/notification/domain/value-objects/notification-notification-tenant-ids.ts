import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationTenantIds extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationTenantIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationTenantIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}