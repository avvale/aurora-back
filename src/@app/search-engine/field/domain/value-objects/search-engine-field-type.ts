import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldType extends StringValueObject
{
    public readonly type: string = 'FieldType';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'FieldType',
            nullable   : false,
            undefinable: false,
            maxLength  : 20,
        }, validationRules));
    }
}