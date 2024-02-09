import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxTenantRecipientIds extends JsonValueObject
{
    public readonly type: string = 'NotificationOutboxTenantRecipientIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxTenantRecipientIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}