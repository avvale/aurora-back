import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxAccountCode extends StringValueObject
{
    public readonly type: string = 'NotificationInboxAccountCode';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxAccountCode',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}