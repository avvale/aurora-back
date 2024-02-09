import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSort extends IntValueObject
{
    public readonly type: string = 'NotificationInboxSort';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSort',
            nullable   : false,
            undefinable: false,
            unsigned   : false,
        }, validationRules));
    }
}