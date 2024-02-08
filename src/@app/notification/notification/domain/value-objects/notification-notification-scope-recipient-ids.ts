import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationScopeRecipientIds extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationScopeRecipientIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationScopeRecipientIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}