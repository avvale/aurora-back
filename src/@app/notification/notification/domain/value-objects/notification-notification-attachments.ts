import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationAttachments extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationAttachments';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationAttachments',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}