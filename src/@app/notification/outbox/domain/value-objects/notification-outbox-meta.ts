import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxMeta extends JsonValueObject
{
    public readonly type: string = 'NotificationOutboxMeta';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxMeta',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}