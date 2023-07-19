import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceCode extends StringValueObject
{
    public readonly type: string = 'ResourceCode';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ResourceCode',
            nullable   : false,
            undefinable: false,
            maxLength  : 30,
        }, validationRules));
    }
}