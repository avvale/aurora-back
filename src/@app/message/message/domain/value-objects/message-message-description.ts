import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class MessageMessageDescription extends StringValueObject
{
    public readonly type: string = 'MessageMessageDescription';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'MessageMessageDescription',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}