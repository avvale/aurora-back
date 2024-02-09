import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationScopeRecipients extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationScopeRecipients';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationScopeRecipients',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}