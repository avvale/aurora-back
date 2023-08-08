import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldType extends StringValueObject
{
    public readonly type: string = 'SearchEngineFieldType';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineFieldType',
            nullable   : false,
            undefinable: false,
            maxLength  : 20,
        }, validationRules));
    }
}