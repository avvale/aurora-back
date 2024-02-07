import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationMeta extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationMeta';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationMeta',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}