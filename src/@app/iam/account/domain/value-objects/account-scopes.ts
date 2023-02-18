import { JsonValueObject, ValidationRules } from '@aurora-ts/core';

export class AccountScopes extends JsonValueObject
{
    public readonly type: 'AccountScopes';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AccountScopes',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}