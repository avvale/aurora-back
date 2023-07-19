import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceIsActive extends BooleanValueObject
{
    public readonly type: string = 'ResourceIsActive';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ResourceIsActive',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}