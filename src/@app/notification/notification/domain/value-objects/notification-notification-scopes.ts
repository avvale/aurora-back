import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationScopes extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationScopes';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationScopes',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}