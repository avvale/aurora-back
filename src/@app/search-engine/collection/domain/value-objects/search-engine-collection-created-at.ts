import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'SearchEngineCollectionCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineCollectionCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}