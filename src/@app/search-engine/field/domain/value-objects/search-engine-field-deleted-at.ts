import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'FieldDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'FieldDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}