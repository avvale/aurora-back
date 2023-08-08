import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldId extends UuidValueObject
{
    public readonly type: string = 'SearchEngineFieldId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineFieldId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}