import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxScopeRecipients extends JsonValueObject
{
    public readonly type: string = 'NotificationOutboxScopeRecipients';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxScopeRecipients',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}