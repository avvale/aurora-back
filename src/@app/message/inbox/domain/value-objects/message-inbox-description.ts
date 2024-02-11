import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MessageInboxDescription extends StringValueObject
{
    public readonly type: string = 'MessageInboxDescription';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MessageInboxDescription',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}