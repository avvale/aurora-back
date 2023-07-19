import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceName extends StringValueObject
{
    public readonly type: string = 'ResourceName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ResourceName',
            nullable   : false,
            undefinable: false,
            maxLength  : 100,
        }, validationRules));
    }
}