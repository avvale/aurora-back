import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationMeta extends JsonValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationMeta';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationMeta',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}