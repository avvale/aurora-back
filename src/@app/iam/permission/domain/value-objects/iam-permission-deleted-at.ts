import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IamPermissionDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'PermissionDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'PermissionDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}