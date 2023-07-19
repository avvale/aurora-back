import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyQuality extends IntValueObject
{
    public readonly type: string = 'AttachmentFamilyQuality';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyQuality',
            nullable   : true,
            undefinable: true,
            maxLength  : 3,
            unsigned   : true,
        }, validationRules));
    }
}