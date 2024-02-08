import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationTenantRecipientIds extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationTenantRecipientIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationTenantRecipientIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}