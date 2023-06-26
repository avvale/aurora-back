import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionId extends UuidValueObject
{
    public readonly type: string = 'CollectionId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CollectionId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}