import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MessageInboxTitle extends StringValueObject
{
    public readonly type: string = 'MessageInboxTitle';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MessageInboxTitle',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}