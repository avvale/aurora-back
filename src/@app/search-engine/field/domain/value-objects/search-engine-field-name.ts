import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldName extends StringValueObject
{
    public readonly type: string = 'FieldName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'FieldName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}