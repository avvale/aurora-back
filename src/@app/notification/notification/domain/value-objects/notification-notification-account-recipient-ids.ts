import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationAccountRecipientIds extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationAccountRecipientIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationAccountRecipientIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}