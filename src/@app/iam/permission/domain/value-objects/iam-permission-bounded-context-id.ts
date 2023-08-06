import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class IamPermissionBoundedContextId extends UuidValueObject
{
    public readonly type: string = 'PermissionBoundedContextId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'PermissionBoundedContextId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}