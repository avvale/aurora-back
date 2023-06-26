import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldIsNullable extends BooleanValueObject
{
    public readonly type: string = 'FieldIsNullable';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'FieldIsNullable',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}