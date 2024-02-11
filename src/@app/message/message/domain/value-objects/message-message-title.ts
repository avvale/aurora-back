import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MessageMessageTitle extends StringValueObject
{
    public readonly type: string = 'MessageMessageTitle';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MessageMessageTitle',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}