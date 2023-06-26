import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineFieldCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'FieldCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'FieldCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}