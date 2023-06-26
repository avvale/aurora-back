import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'FieldUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'FieldUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}