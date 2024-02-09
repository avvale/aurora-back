import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxBody extends StringValueObject
{
    public readonly type: string = 'NotificationInboxBody';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxBody',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}