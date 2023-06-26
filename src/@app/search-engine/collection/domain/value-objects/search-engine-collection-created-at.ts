import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'CollectionCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CollectionCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}