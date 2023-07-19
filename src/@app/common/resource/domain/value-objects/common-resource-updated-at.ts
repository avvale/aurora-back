import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ResourceUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ResourceUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}