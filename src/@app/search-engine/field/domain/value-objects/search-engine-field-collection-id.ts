import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldCollectionId extends UuidValueObject
{
    public readonly type: string = 'SearchEngineFieldCollectionId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineFieldCollectionId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}