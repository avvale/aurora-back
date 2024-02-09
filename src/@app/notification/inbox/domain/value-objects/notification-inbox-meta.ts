import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxMeta extends JsonValueObject
{
    public readonly type: string = 'NotificationInboxMeta';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxMeta',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}