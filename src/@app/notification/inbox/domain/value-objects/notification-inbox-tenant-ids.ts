import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxTenantIds extends JsonValueObject
{
    public readonly type: string = 'NotificationInboxTenantIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxTenantIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}