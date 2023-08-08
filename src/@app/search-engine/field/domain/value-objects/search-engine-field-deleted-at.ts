import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'SearchEngineFieldDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineFieldDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}