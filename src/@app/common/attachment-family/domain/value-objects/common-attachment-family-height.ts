import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyHeight extends SmallintValueObject
{
    public readonly type: string = 'AttachmentFamilyHeight';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyHeight',
            nullable   : true,
            undefinable: true,
            maxLength  : 5,
            unsigned   : true,
        }, validationRules));
    }
}