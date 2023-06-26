import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'CollectionUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CollectionUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}