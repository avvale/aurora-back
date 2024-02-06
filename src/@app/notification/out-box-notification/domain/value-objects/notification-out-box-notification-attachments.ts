import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationAttachments extends JsonValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationAttachments';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationAttachments',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}