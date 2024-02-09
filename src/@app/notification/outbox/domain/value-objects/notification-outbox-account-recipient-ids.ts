import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxAccountRecipientIds extends JsonValueObject
{
    public readonly type: string = 'NotificationOutboxAccountRecipientIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxAccountRecipientIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}