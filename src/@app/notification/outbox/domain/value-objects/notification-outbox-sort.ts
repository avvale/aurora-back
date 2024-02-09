import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxSort extends IntValueObject
{
    public readonly type: string = 'NotificationOutboxSort';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxSort',
            nullable   : false,
            undefinable: false,
            unsigned   : false,
        }, validationRules));
    }
}