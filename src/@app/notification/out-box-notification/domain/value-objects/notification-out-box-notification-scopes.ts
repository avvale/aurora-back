import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationScopes extends JsonValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationScopes';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationScopes',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}