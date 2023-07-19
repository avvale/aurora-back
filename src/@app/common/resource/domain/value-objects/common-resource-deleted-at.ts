import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ResourceDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ResourceDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}