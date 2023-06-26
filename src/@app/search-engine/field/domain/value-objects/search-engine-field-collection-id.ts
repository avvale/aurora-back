import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldCollectionId extends UuidValueObject
{
    public readonly type: string = 'FieldCollectionId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'FieldCollectionId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}