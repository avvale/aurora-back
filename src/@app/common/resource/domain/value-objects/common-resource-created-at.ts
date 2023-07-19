import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ResourceCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ResourceCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}