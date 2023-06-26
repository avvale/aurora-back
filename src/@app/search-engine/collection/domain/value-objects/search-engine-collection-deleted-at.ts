import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'CollectionDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CollectionDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}