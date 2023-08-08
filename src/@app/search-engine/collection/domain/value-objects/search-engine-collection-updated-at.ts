import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'SearchEngineCollectionUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineCollectionUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}