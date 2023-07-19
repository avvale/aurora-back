import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonResourceHasAttachments extends BooleanValueObject
{
    public readonly type: string = 'ResourceHasAttachments';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ResourceHasAttachments',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}